---
title: Java IO 流
date: 2021-12-19
categories:
        - 编程语言
tags:
        - Java
        - Note
---

# IO 流

```java
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;

public class ShuRuShuChu {
        public static void main(String[]args) throws Exception {
//写入
            String str="写入成功！";
            File xieru=new File("C:\\Users\\admin\\Desktop\\期末考试\\李白.txt");
            FileOutputStream fos=new FileOutputStream(xieru,true);
            byte[] words=str.getBytes();
            fos.write(words,0,words.length);

//读取
            File file2 = new File("C:\\Users\\admin\\Desktop\\期末考试\\李白.txt");
            FileInputStream fis = new FileInputStream(file2);
            byte[] b = new byte[1024];
            int len = fis.read(b);
            while (len != -1) {
                String data = new String(b);
                System.out.println(data);
                len = fis.read(b);
            }
        }
}
```
