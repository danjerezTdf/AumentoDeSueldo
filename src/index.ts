/* Ejercicio – Aumento de Sueldo
• Una empresa desea premiar a sus empleados con un
aumento de sueldo. Este aumento se ajusta a la siguiente
tabla:
58
Sueldo Actual Sueldo con Aumento
0 - 15.000 $ 20%
15.001 - 20.000 $ 10%
20.001 - 25.000 $ 5%
Más de 25.000 $ No hay aumento
• Desarrolle un algoritmo dado el salario actual de un
empleado determine el aumento de sueldo a aplicar y
se lo muestre */

let sueldo: number = Number(prompt(`Ingrese Suelto a Comprobar:`));

if (sueldo <= 15000) {
  console.log(
    `A Usted le corresponde un sueldo con aumento del 20%: ${sueldo * 1.2}`
  );
} else {
  if (sueldo <= 20000) {
    console.log(
      `A Usted le corresponde un sueldo con aumento del 10%: ${sueldo * 1.1}`
    );
  } else {
    if (sueldo <= 25000) {
      console.log(
        `A Usted le corresponde un sueldo con aumento del 5%: ${sueldo * 1.05}`
      );
    } else {
      console.log(`A Usted no le corresponde un sueldo con aumento`, sueldo);
    }
  }
}
