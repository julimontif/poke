import Pokemones from "../app/pages"
import { render, screen, waitFor } from "@testing-library/react"

// global.fetch = jest.fn(() =>
//     Promise.resolve({
//         json: () => Promise.resolve({
//             results: [
//                 {name: }
//             ]
//         })
//     }))


describe("Pokemones", () => {
    it("renderiza el encabezado correctamente", () => {
        render(<Pokemones pokemones={[]} />)

        expect(screen.getByText("Mi App de Pokemones"))
    })
})