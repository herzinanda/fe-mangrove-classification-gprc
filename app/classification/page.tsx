import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import Sidebar from "../components/sidebar/sidebar"

const Classification = () => {
    return (
        <>
            <Sidebar></Sidebar>
            <main className="flex flex-col p-4 lg:p-6">
                <div className="flex flex-col gap-6">
                    <h1 className="text-lg font-semibold md:text-2xl">Klasifikasi Zona Tanam Mangrove Desa Pulau Sembilan Menggunakan Gaussian Process Regression for Classification</h1>
                    <p className="">Silakan masukkan file .csv pada form di bawah ini untuk diklasifikasi.</p>
                </div>
                {/* <Table className="rounded m-0">
                    <TableHeader className="bg-slate-200 m-0">
                        <TableRow className="">
                            <TableHead className="font-bold text-center">Water Height</TableHead>
                            <TableHead className="font-bold text-center">Water Temperature</TableHead>
                            <TableHead className="font-bold text-center">Air Temperature</TableHead>
                            <TableHead className="font-bold text-center">Air Humidity</TableHead>
                            <TableHead className="font-bold text-center">TDS</TableHead>
                            <TableHead className="font-bold text-center">Oxidation Reduction Potential (ODS)</TableHead>
                            <TableHead className="font-bold text-center">Dissolved Oxygen</TableHead>
                            <TableHead className="font-bold text-center">pH</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="rounded bg-slate-200">
                        <TableRow className="">
                            <TableCell className="rounded p-0">
                                <input type="text" name="waterHeight" id="suhuAir" className="box-border w-full border rounded py-2 px-1" />
                            </TableCell>
                            <TableCell className="p-0">
                                <input type="text" name="waterTemp" id="suhuAir" className="box-border w-full border rounded py-2 px-1" />
                            </TableCell>
                            <TableCell className="p-0">
                                <input type="text" name="airTemp" id="suhuAir" className="box-border w-full border rounded py-2 px-1" />
                            </TableCell>
                            <TableCell className="p-0">
                                <input type="text" name="airHumid" id="suhuAir" className="box-border w-full border rounded py-2 px-1" />
                            </TableCell>
                            <TableCell className="p-0">
                                <input type="text" name="tds" id="suhuAir" className="box-border w-full border rounded py-2 px-1" />
                            </TableCell>
                            <TableCell className="p-0">
                                <input type="text" name="ods" id="suhuAir" className="box-border w-full border rounded py-2 px-1" />
                            </TableCell>
                            <TableCell className="p-0">
                                <input type="text" name="do" id="suhuAir" className="box-border w-full border rounded py-2 px-1" />
                            </TableCell>
                            <TableCell className="p-0">
                                <input type="text" name="pH" id="suhuAir" className="box-border w-full border rounded py-2 px-1" />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <div className="flex flex-row w-full items-center justify-center mt-2 -my-2">
                    <Button type="submit" className="my-2">Submit for Classification</Button>
                </div> */}

                {/* <Separator className="mt-6" /> */ }
                {/* <span className="my-6">Atau kamu bisa mengupload file ekstensi csv pada form di bawah ini.</span> */ }
                {/* <div className="flex flex-col max-w-sm gap-1.5">
              
            </div> */}
                <div className="flex flex-col w-full max-w-sm gap-2 mt-2">
                    <Label htmlFor="file">Masukkan File (.csv)</Label>
                    <Input id="file" type="file" className="" />
                    <Button type="submit" className="my-">Submit for Classification</Button>
                </div>
                <div className="flex flex-row w-full items-center justify-center -my-2">
                </div>
            </main >
        </>
    )
}

export default Classification