package Empleado_Tests;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.*;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

class Empleado_Test_Junit5 {

	private Empleado emp;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		System.out.println("Start of the test");
	}
	
	@AfterAll
	static void tearDownAfterClass () throws Exception {
		System.out.println("Final of the tests");
	}
	
	@BeforeEach
	void setUp () throws Exception {
		emp = new Empleado("Mario", 1500);
	}
	
	@AfterEach 
	void tearDown() throws Exception {
		emp = null;
	}
	
	
	
	
	
	@Test
	final void testSalario() {
		emp.setSalario(1221);
	}
	
	@Test
	final void testSubir() {
		emp.subirSalario(2);
	}
	
	@Test
	final void testSubir_f() {
		emp.subirSalario(2);
	}

	@Test
	final void testBajar() {
		emp.bajarSalario(-2);
	}
	
	@Test
	final void testBajar_f() {
		emp.bajarSalario(-2);
	}
	
	@Test
	final void testAnual() {
		emp.salarioAnual();
	}
}
