import Veterinario from "./Veterinario";1
import Recepcionista from "./Recepcionista";
import Consulta from "./Consulta";
import Gato from "./Gato";
import Cachorro from "./Cachorro";
import Ave from "./Ave";

const veterinario1 = new Veterinario("Dr. João", 123, 5000);
const recepcionista1 = new Recepcionista("Maria", 456, 3000);
const gato1 = new Gato("Mingau", 2, "Carlos");
const cachorro1 = new Cachorro("Rex", 3, "Ana");
const ave1 = new Ave("Piu-Piu", 1, "Lucas");
const consulta1 = new Consulta(gato1, veterinario1, new Date("2024-06-15"));

veterinario1.realizarConsulta();
veterinario1.realizarConsulta();
recepcionista1.confirmarAgendamento();
recepcionista1.confirmarAgendamento();
recepcionista1.confirmarAgendamento();
veterinario1.calcularBonus();
recepcionista1.calcularBonus();
veterinario1.imprimeInfo();
recepcionista1.imprimeInfo();
gato1.imprimeInfo();
cachorro1.imprimeInfo();
ave1.imprimeInfo();
consulta1.imprimeInfo();
