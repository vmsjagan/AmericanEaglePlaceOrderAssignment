package com.app.utility;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;

import org.testng.Assert;

public class ResourceFetchUtility {

	public static String getResourcePath(String resource) {
		boolean result = false;
		String path = null;
		try {
			path = getBaseResourcePath() + resource;
			result = true;
		} catch (Exception ex) {
			Assert.assertTrue(result, "Get resource path failed.." + "\n" + ex);
		}
		return path;
	}

	public static String getBaseResourcePath() {
		boolean result = false;
		String path = null;
		try {
			path = System.getProperty("user.dir");
			result = true;
		} catch (Exception ex) {
			Assert.assertTrue(result, "Get base resource path failed.." + "\n" + ex);
		}
		return path;
	}

	public static InputStream getResourcePathInputStream(String path) throws FileNotFoundException {
		boolean result = false;
		try {
			result = true;
		} catch (Exception ex) {
			Assert.assertTrue(result, "Get base resource path input stream failed.." + "\n" + ex);
		}
		return new FileInputStream(ResourceFetchUtility.getResourcePath(path));
	}

	public static void main(String ar[]) {
		String path = getBaseResourcePath();
		System.out.println("path : " + path);
	}
}
