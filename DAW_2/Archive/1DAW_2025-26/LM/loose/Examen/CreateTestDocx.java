import java.io.*;
import java.nio.file.*;
import java.util.zip.*;

public class CreateTestDocx {

    static void createDocx(String filePath, String... paragraphs) throws Exception {
        Path path = Paths.get(filePath);
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        try (ZipOutputStream zos = new ZipOutputStream(baos)) {
            // [Content_Types].xml
            zos.putNextEntry(new ZipEntry("[Content_Types].xml"));
            zos.write(("<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>"
                + "<Types xmlns=\"http://schemas.openxmlformats.org/package/2006/content-types\">"
                + "<Default Extension=\"rels\" ContentType=\"application/vnd.openxmlformats-package.relationships+xml\"/>"
                + "<Default Extension=\"xml\" ContentType=\"application/xml\"/>"
                + "<Override PartName=\"/word/document.xml\" ContentType=\"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml\"/>"
                + "</Types>").getBytes("UTF-8"));
            zos.closeEntry();

            // _rels/.rels
            zos.putNextEntry(new ZipEntry("_rels/.rels"));
            zos.write(("<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>"
                + "<Relationships xmlns=\"http://schemas.openxmlformats.org/package/2006/relationships\">"
                + "<Relationship Id=\"rId1\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument\" Target=\"word/document.xml\"/>"
                + "</Relationships>").getBytes("UTF-8"));
            zos.closeEntry();

            // word/_rels/document.xml.rels
            zos.putNextEntry(new ZipEntry("word/_rels/document.xml.rels"));
            zos.write(("<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>"
                + "<Relationships xmlns=\"http://schemas.openxmlformats.org/package/2006/relationships\">"
                + "<Relationship Id=\"rId1\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles\" Target=\"styles.xml\"/>"
                + "</Relationships>").getBytes("UTF-8"));
            zos.closeEntry();

            // word/document.xml
            StringBuilder xml = new StringBuilder();
            xml.append("<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>");
            xml.append("<w:document xmlns:w=\"http://schemas.openxmlformats.org/wordprocessingml/2006/main\">");
            xml.append("<w:body>");
            for (String p : paragraphs) {
                xml.append("<w:p><w:r><w:t xml:space=\"preserve\">");
                xml.append(p.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace("\"", "&quot;"));
                xml.append("</w:t></w:r></w:p>");
            }
            xml.append("</w:body></w:document>");

            zos.putNextEntry(new ZipEntry("word/document.xml"));
            zos.write(xml.toString().getBytes("UTF-8"));
            zos.closeEntry();

            // word/styles.xml (minimal)
            zos.putNextEntry(new ZipEntry("word/styles.xml"));
            zos.write(("<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>"
                + "<w:styles xmlns:w=\"http://schemas.openxmlformats.org/wordprocessingml/2006/main\">"
                + "<w:style w:type=\"paragraph\" w:styleId=\"Normal\"><w:name w:val=\"Normal\"/></w:style>"
                + "</w:styles>").getBytes("UTF-8"));
            zos.closeEntry();
        }
        Files.write(path, baos.toByteArray());
    }

    public static void main(String[] args) throws Exception {
        if (args.length < 2) {
            System.out.println("Usage: java CreateTestDocx <output.docx> <paragraph1> [paragraph2...]");
            return;
        }
        String[] paragraphs = new String[args.length - 1];
        System.arraycopy(args, 1, paragraphs, 0, args.length - 1);
        createDocx(args[0], paragraphs);
        System.out.println("Created: " + args[0]);
    }
}
