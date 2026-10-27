<!-- English translation of INP-UD01-Task1_2.pdf (original: Spanish).
     Screenshots in the PDF are not reproduced; page numbers are omitted.
     AWS console labels are given in English, with the Spanish label in parentheses where the original used the Spanish console. -->

# UNIT 1: INTRODUCTION TO CLOUD COMPUTING

# TASK 1.2: DEPLOYING WORDPRESS USING PaaS

In this practical we are going to deploy WordPress through the AWS Elastic Beanstalk service.

Elastic Beanstalk is a PaaS service that simplifies the process of deploying and managing applications. It automatically handles server provisioning, load balancing, auto scaling and monitoring.

In this practical the WordPress database is created separately in Amazon RDS, independently of the Elastic Beanstalk environment. That way, if you delete the environment, the database will not be deleted.

First we will prepare the network and the database in Amazon RDS, then we will create the Elastic Beanstalk environment allowing its instances to access the database and, finally, we will give WordPress the connection details during its web installation.

## PART 1: CREATE THE SECURITY GROUPS

A security group acts as a virtual firewall. So that only the instances of our environment can connect to the database, we will create two groups: one that we will associate with the Elastic Beanstalk instances and another for the database, which will only accept connections coming from the first.

Access the AWS console of the Learner Lab, check that you are in the N. Virginia region (us-east-1) and search for the **EC2** service. In the left-hand menu, under **Network & Security** (*Redes y seguridad*), click **Security Groups** (*Grupos de seguridad*) and then **Create security group** (*Crear grupo de seguridad*).

First create the group for the instances: in **Security group name** type `wordpress-ec2-sg`, add a description (for example, *WordPress instances in Elastic Beanstalk*) and leave the default VPC selected. Do not add any inbound rule: this group only serves to identify the instances of the environment.

Then create a second group called `wordpress-rds-sg`, in the same VPC. In this case, under **Inbound rules** click **Add rule** and set **Type** to **MYSQL/Aurora** (port 3306) and **Source** to **Custom**, selecting the security group `wordpress-ec2-sg` in the drop-down (type `wordpress-ec2` to find it). This way, only instances that have `wordpress-ec2-sg` associated will be able to connect to MySQL.

Click **Create security group** to finish.

## PART 2: CREATE THE DATABASE IN AMAZON RDS

Now search for the **RDS** service, click **Databases** in the left-hand menu and then **Create database**.

Configure the database with the values in the following table and leave the remaining options at their default value. Depending on the console version, some options may appear with a slightly different name or in a different order.

| Option | Value |
|---|---|
| Creation method | Standard create (in some console versions, Full configuration) |
| Engine options | MySQL, with whichever version appears by default |
| Templates | Dev/Test (or Free tier, if it appears) |
| Availability and durability | Single DB instance (no Multi-AZ) |
| DB instance identifier | `wordpress-db` |
| Master username | `admin` |
| Credentials management | Self managed |
| Master password | Choose a password of at least 8 characters (RDS does not accept spaces or the characters `/`, `"` and `@`) and write it down: you will need it later |
| Instance class | `db.t3.micro` (burstable classes) |
| Storage | General Purpose SSD (gp3), 20 GiB. Untick storage autoscaling |
| Connectivity | Don't connect to an EC2 compute resource |
| Virtual private cloud (VPC) | Default VPC (the same one in which you will create the Elastic Beanstalk environment) |
| Public access | No |
| VPC security group | Choose existing: `wordpress-rds-sg` (remove the `default` group) |
| Monitoring | Untick Performance Insights and enhanced monitoring: they are not needed and can cause errors in the lab, which does not allow creating IAM roles |
| Additional configuration > Initial database name | `ebdb` |
| Additional configuration > Backup | Untick **Enable automated backups**: we do not need them in the lab |

Pay special attention to the **Initial database name**, which is inside **Additional configuration**. If you leave it empty, RDS creates the MySQL server but does not create any database inside it, and WordPress would have nowhere to install itself.

Click **Create database**. Creation takes between 5 and 10 minutes, so you can continue with Part 3 while the status changes from *Creating* to *Available*. Check that it is available before reaching Part 7, where you will need its connection details.

## PART 3: CREATE THE APPLICATION AND CONFIGURE THE ENVIRONMENT IN ELASTIC BEANSTALK

Once you are in the AWS console of the Learner Lab, search for and select the **Elastic Beanstalk** service. Click **Create**.

**Important:** the AWS console changes frequently, so the screenshots in this practical may differ from what you see in your console. Be guided by the names of the sections and options given in the text, which correspond to the Elastic Beanstalk console in English (if your console is in Spanish, the names will be equivalent).

Elastic Beanstalk shows a single screen, **Create environment**, with several sections. Under **Deployment mode** leave the **Standard** option ticked, which is intended for simple or low-traffic applications.

Under **Environment details**, type the name of the application in **Application name**, such as `WordPressApp`. The remaining basic details (environment name, domain prefix and description) are optional and you can leave them at their default value.

Scroll down to the **Platform details** section. A platform is a combination of an operating system, a runtime environment, a web server, an application server and Elastic Beanstalk components.

Since WordPress is based on PHP, we need to select it under **Platform**. Under **Platform branch** choose the most recent PHP branch that appears (the latest version of WordPress is compatible with PHP 8.3 and above) and leave the **Platform version** set to the recommended one. More up-to-date versions than those in the screenshot may appear.

Go to the **Application code** section, where we will have to upload a file containing WordPress. Select the **Local file** option; with **Choose file** you will upload the compressed file that we are going to prepare next.

To do so, download WordPress from the following link. The downloaded compressed file is not suitable, because Elastic Beanstalk expects the compressed file we upload to contain the files themselves directly (not wrapped in a folder). Therefore, decompress the downloaded file, select all the files it contains and create a compressed file that will work with Elastic Beanstalk.

## PART 4: CONFIGURING SERVICE ACCESS

Without leaving the **Create environment** screen, scroll down to the end of the first section, where **Environment properties**, **Platform-specific options**, **Service access** and **Tags** appear.

Expand **Service access**. Because of the limitations of the AWS Academy Learner Lab, it is important to use the roles the lab gives us: under **Service role** tick **Use another role** and select `LabRole`; under **EC2 instance profile** also tick **Use another role** and select `LabInstanceProfile`; and under **EC2 key pair** select `vockey`.

With this the minimum details of the environment are defined, but before creating it we are going to allow its instances to access the database (Part 5).

## PART 5: INSTANCE ACCESS TO THE DATABASE

In addition to **Service access**, the **Create environment** screen includes several optional sections with advanced options: **Infrastructure**, **Networking** and **Monitoring and updates**. We are going to leave the default settings so as to focus more on deploying WordPress, except in one section, where we have to give the environment's instances access to the database we created in RDS.

Expand the **Networking** section. Under **Instance settings** leave the default VPC (**Default VPC**), the same one the database is in, and the **Instance subnets** that appear by default.

Under **EC2 security groups** you will see that there is already a security group selected, created by Elastic Beanstalk (its name begins with `awseb-`). Do not remove it: it allows web traffic to reach the instances. Also add `wordpress-ec2-sg` from the **Choose security groups** drop-down. This way, the environment's instances will be allowed the MySQL access defined in Part 1.

Finally, expand the **Review** section, check the summary of the environment's configuration and click **Create environment** to create it.

## PART 6: DEPLOY THE ENVIRONMENT

The WordPress deployment process may take about 5 minutes, because AWS has to create all the necessary resources, such as the virtual machine instances (EC2) and the security groups. The database is not created in this process: it already exists because you launched it yourself earlier in RDS.

Once the environment is deployed, AWS gives us a public URL for accessing the WordPress application.

## PART 7: CONFIGURE THE WORDPRESS INSTALLATION

Click the environment's URL, choose the WordPress language and you will reach the step where the database connection has to be configured. To fill in the form you need the details of the database you created in RDS.

To get them, search for the **RDS** service, click **Databases** in the left-hand menu and select `wordpress-db`.

In the database's **Connectivity & security** tab you will find the details you need: the **Endpoint**, which you must copy; the **Database name**, `ebdb`; and the **Master username**, `admin`.

The screenshots correspond to a different database, so the identifier and endpoint of yours will be different.

Fill in the WordPress form with these values:

| WordPress field | Value |
|---|---|
| Database name | `ebdb` |
| Username | `admin` |
| Password | The master password you chose in Part 2 |
| Database host | The RDS endpoint, without the port |
| Table prefix | `wp_` (leave it as it is) |

Note that the **Database host** field appears pre-filled with `localhost`: delete it before pasting the endpoint, because otherwise the two texts are concatenated and the connection fails.

When you have finished, click **Submit**.

And if everything goes well, WordPress will tell you that it can communicate with your database!

If WordPress cannot connect, check that the database is *Available*, that the details entered match those of the database, that the `wordpress-ec2-sg` group is associated with the environment's instances, and that `wordpress-rds-sg` allows MySQL traffic from it.

Click **Run the installation** and complete the site details (title, administrator user, password and e-mail address). Then log in to WordPress and publish the post requested in the deliverable.

Once that connection has been verified, take the screenshots needed for the deliverable part of the practical, and you can then delete the resources so as not to incur unnecessary costs. Start by terminating the Elastic Beanstalk environment.

The database is independent of the environment, so it is not deleted when you terminate it and you have to delete it yourself. In RDS, select the database and click **Actions > Delete**. Untick **Create final snapshot**, tick the acknowledgement box and type `delete me` to confirm. When the environment and the database have disappeared, also delete the security groups `wordpress-rds-sg` and, afterwards, `wordpress-ec2-sg` from **EC2 > Security Groups**.

## Deliverable

- In the AWS console, details of the environment created with Elastic Beanstalk
- In RDS, details of the database (*Connectivity & security* panel) and inbound rules of the `wordpress-rds-sg` security group
- Screenshot of WordPress working, with a post that says "Prueba de Wordpress con modelo PaaS de Nombre, Apellidos" (*"WordPress test with the PaaS model by First name, Surnames"* — put your real full name there).
