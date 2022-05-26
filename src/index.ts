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
