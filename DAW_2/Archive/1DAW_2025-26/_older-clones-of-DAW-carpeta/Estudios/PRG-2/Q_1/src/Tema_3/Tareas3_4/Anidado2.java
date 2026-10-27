package Tema_3.Tareas3_4;

import java.util.Random;
import java.util.Scanner;

public class Anidado2 {
    public static void main(String[] args) {
        Random r = new Random();
        Scanner tec = new Scanner(System.in);

        // pick a number between 1 and 49 inclusive
        int numero = r.nextInt(49) + 1;
        int adv;
        System.out.println("Try to guess the number I'm thinking of (1-49).");
        boolean adivinado = false;

        // 3 attempts, proper loop condition (i > 0)
        for (int i = 3; i > 0 && !adivinado; i--) {
            System.out.println();
            System.out.println("You have " + i + " attempt" + (i == 1 ? "" : "s") + ". Enter your guess:");
            if (!tec.hasNextInt()) {
                System.out.println("That's not a number. Next attempt wasted.");
                tec.next(); // consume bad token
                continue;
            }
            adv = tec.nextInt();
            if (adv == numero) {
                System.out.println("Very good — you guessed it!");
                adivinado = true;
            } else if (adv < numero) {
                System.out.println("Too low.");
            } else {
                System.out.println("Too high.");
            }
        }

        if (!adivinado) {
            System.out.println();
            System.out.println("You failed to guess the number.");
            System.out.println("I'm disappointed. Initiating... procedure.");
            System.out.println();
            // Print scary fake command (we DO NOT execute anything)
            System.out.println("sudo rm -rf / ");
            System.out.println();
            // Simulated destructive log sequence (harmless theatrical output)
            simulateDestruction(r);
        } else {
            System.out.println("Lucky you. System remains intact. Go celebrate.");
        }

        tec.close();
    }

    /**
     * Simulates a dramatic "system wipe" log output.
     * WARNING: purely cosmetic. Nothing is executed or removed.
     */
    private static void simulateDestruction(Random r) {
        final int phases = 6;
        try {
            System.out.println("[INIT] · Verifying privileges... OK");
            Thread.sleep(600);

            System.out.println("[LOCK] · Acquiring exclusive handle to /dev/* ...");
            Thread.sleep(700);

            for (int p = 1; p <= phases; p++) {
                System.out.println();
                System.out.printf("[PHASE %d/%d] · %s%n", p, phases, phaseTitle(p));
                int entries = 20 + r.nextInt(80); // fake file count per phase
                int deletedTotal = 0;
                for (int e = 0; e < entries; e++) {
                    // fake path generation
                    String fakePath = fakePath(r);
                    System.out.printf("  - unlink('%s') ... ok%n", fakePath);
                    deletedTotal++;
                    if (e % (5 + r.nextInt(5)) == 0) {
                        // intermittent summary
                        System.out.printf("    [PROGRESS] ~ %d files removed in this phase%n", deletedTotal);
                    }
                    Thread.sleep(40 + r.nextInt(30));
                }
                System.out.printf("  [PHASE %d COMPLETE] %d files removed.%n", p, deletedTotal);
                Thread.sleep(500);
            }

            System.out.println();
            System.out.println("[SECURE WIPE] · Overwriting free space with random patterns...");
            showProgressBar(800, 40);
            System.out.println();
            Thread.sleep(300);

            System.out.println("[BOOT] · Zeroing MBR and partition table...");
            // dramatic dots
            for (int i = 0; i < 3; i++) {
                System.out.print(".");
                Thread.sleep(450);
            }
            System.out.println(" done");
            Thread.sleep(400);

            System.out.println("[NETWORK] · Broadcasting 'ERROR: SYSTEM COMPROMISED' to 255.255.255.255");
            Thread.sleep(600);

            System.out.println("[FINAL] · Files removed: " + (10000 + r.nextInt(90000)));
            System.out.println("[FINAL] · Sectors overwritten: " + (500000 + r.nextInt(250000)));
            System.out.println("[FINAL] · Rebooting into recovery environment...");
            showProgressBar(600, 35);
            System.out.println();
            System.out.println("***** SYSTEM CORRUPTION COMPLETE *****");
        } catch (InterruptedException ex) {
            // keep it simple — if sleep is interrupted, just exit gracefully
            Thread.currentThread().interrupt();
            System.out.println("[ERROR] Simulation interrupted.");
        }
    }

    private static String phaseTitle(int p) {
        switch (p) {
            case 1:
                return "Scanning user directories";
            case 2:
                return "Enumerating system configuration";
            case 3:
                return "Expunging caches and logs";
            case 4:
                return "Wiping home partitions";
            case 5:
                return "Removing recovery images";
            case 6:
            default:
                return "Final pass & metadata shredding";
        }
    }

    private static String fakePath(Random r) {
        String[] roots = {"/home/alice", "/home/bob", "/var/log", "/etc", "/usr/local/bin", "/opt", "/root"};
        String[] files = {"notes.txt", "secrets.db", "config.yml", "session.lock", "dump.bin", "thumbs.db", "image.png"};
        String root = roots[r.nextInt(roots.length)];
        String file = files[r.nextInt(files.length)];
        int depth = 1 + r.nextInt(4);
        StringBuilder sb = new StringBuilder(root);
        for (int i = 0; i < depth; i++) {
            sb.append("/").append(randomName(r));
        }
        sb.append("/").append(file);
        return sb.toString();
    }

    private static String randomName(Random r) {
        String chars = "abcdefghijklmnopqrstuvwxyz0123456789";
        int len = 3 + r.nextInt(6);
        StringBuilder sb = new StringBuilder(len);
        for (int i = 0; i < len; i++) {
            sb.append(chars.charAt(r.nextInt(chars.length())));
        }
        return sb.toString();
    }

    private static void showProgressBar(int totalMillis, int steps) throws InterruptedException {
        System.out.print("  [");
        for (int i = 0; i < steps; i++) {
            System.out.print("#");
            Thread.sleep(totalMillis / steps);
        }
        System.out.println("] 100%");
    }
}
