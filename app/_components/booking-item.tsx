import { Badge } from "./ui/badge"
import { Avatar } from "./ui/avatar"
import { AvatarImage } from "./ui/avatar"
import { Card, CardContent } from "./ui/card"

const BookingItem = () => {
  return (
    <>
      <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
        Agendamentos
      </h2>
      <Card>
        <CardContent className="flex justify-between">
          <div className="flex flex-col gap-2 py-5 pl-5">
            <Badge className="w-fit">Confirmado</Badge>
            <h3 className="font-semibold">Corte de Cabelo</h3>

            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://utfs.io/f/6b0888f8-b69f-4be7-a13b-52d1c0c9cab2-17m.png" />
              </Avatar>
              <p className="text-sm">Fws Barbearia </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
            <p className="tetx-sm">Agosto</p>
            <p className="text-2xl">05</p>
            <p className="tetx-sm">20:00</p>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default BookingItem
