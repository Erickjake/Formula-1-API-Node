import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

server.register(cors, {
    origin: "*",
})

const teams = [
    { id: 1, name: "Red Bull Racing", base: "Milton Keynes", teamChief: "Christian Horner", technicalChief: "Adrian Newey", powerUnit: "Honda", firstEntry: 2005, worldChampionships: 4, highestRaceFinish: "1 (x73)", polePositions: 64 },
    { id: 2, name: "Mercedes", base: "Brackley", teamChief: "Toto Wolff", technicalChief: "James Allison", powerUnit: "Mercedes", firstEntry: 1954, worldChampionships: 7, highestRaceFinish: "1 (x115)", polePositions: 128 },
    { id: 3, name: "Ferrari", base: "Maranello", teamChief: "Mattia Binotto", technicalChief: "Enrico Cardile", powerUnit: "Ferrari", firstEntry: 1950, worldChampionships: 16, highestRaceFinish: "1 (x238)", polePositions: 230 },
    { id: 4, name: "McLaren", base: "Woking", teamChief: "Andreas Seidl", technicalChief: "James Key", powerUnit: "Mercedes", firstEntry: 1966, worldChampionships: 8, highestRaceFinish: "1 (x182)", polePositions: 156 },
    { id: 5, name: "Alpine", base: "Enstone", teamChief: "Laurent Rossi", technicalChief: "Pat Fry", powerUnit: "Renault", firstEntry: 1986, worldChampionships: 2, highestRaceFinish: "1 (x21)", polePositions: 20 },
    { id: 6, name: "AlphaTauri", base: "Faenza", teamChief: "Franz Tost", technicalChief: "Jody Egginton", powerUnit: "Honda", firstEntry: 1985, worldChampionships: 0, highestRaceFinish: "1 (x2)", polePositions: 1 },
    { id: 7, name: "Aston Martin", base: "Silverstone", teamChief: "Otmar Szafnauer", technicalChief: "Andrew Green", powerUnit: "Mercedes", firstEntry: 1959, worldChampionships: 0, highestRaceFinish: "1 (x1)", polePositions: 0 },
    { id: 8, name: "Williams", base: "Grove", teamChief: "Jost Capito", technicalChief: "François-Xavier Demaison", powerUnit: "Mercedes", firstEntry: 1977, worldChampionships: 9, highestRaceFinish: "1 (x114)", polePositions: 128 },
    { id: 9, name: "Alfa Romeo", base: "Hinwil", teamChief: "Frédéric Vasseur", technicalChief: "Jan Monchaux", powerUnit: "Ferrari", firstEntry: 1950, worldChampionships: 2, highestRaceFinish: "1 (x10)", polePositions: 12 },
    { id: 10, name: "Haas", base: "Kannapolis", teamChief: "Guenther Steiner", technicalChief: "Simone Resta", powerUnit: "Ferrari", firstEntry: 2016, worldChampionships: 0, highestRaceFinish: "4 (x2)", polePositions: 0 },
    { id: 11, name: "Alfa Romeo Racing", base: "Hinwil", teamChief: "Frédéric Vasseur", technicalChief: "Jan Monchaux", powerUnit: "Ferrari", firstEntry: 1950, worldChampionships: 2, highestRaceFinish: "1 (x10)", polePositions: 12 }
];

const drivers = [
    { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
    { id: 2, name: "Lewis Hamilton", team: "Mercedes" },
    { id: 3, name: "Charles Leclerc", team: "Ferrari" },
    { id: 4, name: "Lando Norris", team: "McLaren" },
    { id: 5, name: "Fernando Alonso", team: "Alpine" },
    { id: 6, name: "Pierre Gasly", team: "AlphaTauri" },
    { id: 7, name: "Sebastian Vettel", team: "Aston Martin" },
    { id: 8, name: "George Russell", team: "Williams" },
    { id: 9, name: "Kimi Räikkönen", team: "Alfa Romeo" },
    { id: 10, name: "Mick Schumacher", team: "Haas" },
    { id: 11, name: "Valtteri Bottas", team: "Mercedes" }
];

server.get("/teams", async (request, response) => {
  response.type("application/json").code(200);
  return { teams };
});

server.get("/drivers", async (request, response) => {
    response.type("application/json").code(200);
    return { drivers };
});

interface DriverParams {
    id: string;
}
server.get<{Params: DriverParams}>("/drivers/:id", async (request, response) => {
    const id = parseInt(request.params.id)
    const driver = drivers.find((d) => d.id === id)

    if (!driver) {
        response.type("application/json").code(404);
        return { error: "Driver not found" }
    }else{
        response.type("application/json").code(200);
        return { driver };
    }
    
    ;})

server.listen({ port: 3000 }, () => {
  console.log("Server is running on port 3000");
});
