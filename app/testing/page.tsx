"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Sidebar from "../components/sidebar/sidebar"
import { useEdgeStore } from '../../lib/edgestore';
import * as React from 'react';
import { Progress } from "@/components/ui/progress"
import axios from "axios";
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface PredictionResult {
    actual: number[];
    predicted: number[];
    report: {
        accuracy: number;
    };
    conf_matrix: number[][];
}

const Testing = () => {
    const [file, setFile] = React.useState<File | null>(null);
    const [fileUrl, setFileUrl] = React.useState<string | null>(null);
    const [progress, setProgress] = React.useState(0);
    const [resData, setResData] = React.useState();
    const [textButton, setTextButton] = React.useState<String>("Submit for testing");
    const { edgestore } = useEdgeStore();
    const [result, setResult] = React.useState<PredictionResult | null>(null);
    const [imageUrl, setImageUrl] = React.useState<string>('');
    const [kernel, setKernel] = React.useState<string>('RBF');
    const [loading, setLoading] = React.useState<boolean>(false);

    const handleFileUpload = async () => {
        if (file) {
            try {
                const res = await edgestore.publicFiles.upload({
                    file,
                    onProgressChange: (progress) => {
                        setProgress(progress);
                        console.log(progress);
                    },
                });
                setFileUrl(res.url);
                console.log("File uploaded successfully:", res.url);
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        }
    };

    const handlePredict = async (selectedKernel: string) => {
        setResult(null)
        setLoading(true);
        setImageUrl('');
        setTextButton("Loading...");

        if (fileUrl) {
            try {
                // Make POST request to /predict endpoint with selected kernel
                const response = await axios.post<PredictionResult>('http://localhost:5000/predict', {
                    csv_url: fileUrl,
                    kernel: selectedKernel // Send selected kernel
                });
                setResult(response.data);

                // Fetch confusion matrix image
                const imageResponse = await axios.get('http://localhost:5000/confusion_matrix_image', { responseType: 'blob' });

                // Create a URL for the image
                const url = URL.createObjectURL(new Blob([imageResponse.data]));
                setImageUrl(url);

                console.log(result, imageResponse, url);
            } catch (error) {
                console.error('Error fetching prediction:', error);
            }
        }
        setLoading(false);
        setTextButton("Submit for testing");
    };

    const handleKernelChange = async (value: string) => {
        setKernel(value);
        if (fileUrl) {
            await handlePredict(value);
        }
    };

    React.useEffect(() => {
        if (file) {
            handleFileUpload();
        }
    }, [file]);

    return (
        <>
            <Sidebar />
            <main className="flex flex-col p-4 lg:p-6">
                <div className="flex flex-col gap-6">
                    <h1 className="text-lg font-semibold md:text-2xl">Klasifikasi Zona Tanam Mangrove Desa Pulau Sembilan Menggunakan Gaussian Process Regression for Classification</h1>
                    <p>Silakan masukkan file .csv pada form di bawah ini untuk diuji.</p>
                </div>
                <div className="flex flex-col w-full max-w-sm gap-2 mt-2">
                    <Label htmlFor="file">Masukkan File (.csv)</Label>
                    <Input
                        id="file"
                        type="file"
                        accept=".csv"
                        className=""
                        onChange={ (e) => {
                            setFile(e.target.files?.[0]);
                        } }
                    />

                    { progress > 0 && (
                        <>
                            <Progress value={ progress } />
                            { progress === 100 && <p>Upload Selesai</p> }
                        </>
                    ) }

                    <Label htmlFor="kernel">Pilih Kernel</Label>
                    <Select onValueChange={ handleKernelChange } value={ kernel }>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Kernel" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="RBF">RBF</SelectItem>
                            <SelectItem value="Matern">Matern</SelectItem>
                            <SelectItem value="RationalQuadratic">Rational Quadratic</SelectItem>
                        </SelectContent>
                    </Select>

                    <Button
                        type="submit"
                        className=""
                        onClick={ () => handlePredict(kernel) }
                        disabled={ loading } // Disable button when loading
                    >
                        { textButton }
                    </Button>
                </div>
                <div className="mt-4">
                    { loading && <p>Loading...</p> }

                    { result && (
                        <div>
                            <h2 className="text-lg font-semibold">Prediction Result</h2>
                            <p>Accuracy: { (result.report.accuracy * 100).toFixed(2) }%</p>
                        </div>
                    ) }

                    { imageUrl && (
                        <div className="mt-4">
                            <h2 className="text-lg font-semibold">Confusion Matrix</h2>
                            <Image
                                src={ imageUrl }
                                alt="Confusion Matrix"
                                width={ 800 }
                                height={ 800 }
                            />
                        </div>
                    ) }

                    { result && (
                        <>
                            <h2 className="text-lg font-semibold">Tabel Actual vs. Predicted</h2>
                            <div className="flex flex-row gap-1 mt-4">
                                <div className="flex flex-col">
                                    <div className="flex bg-primary text-white justify-center items-center">No.</div>
                                    <Separator />
                                    { result.actual.map((item, index) => (
                                        <>
                                            <div key={ index } className="flex bg-primary text-white justify-center items-center">{ index + 1 }.</div>
                                            <Separator />
                                        </>
                                    )) }
                                </div>
                                <div className="flex flex-col w-full">
                                    <div className="flex bg-primary text-white justify-center items-center">Actual</div>
                                    <Separator />
                                    { result.actual.map((item, index) => (
                                        <>
                                            <div key={ index } className={ `flex justify-center items-center ${(item === 1) ? "bg-lime-400" : (item === 2) ? "bg-green-500" : "bg-green-800 text-white"}` }>{ item }</div>
                                            <Separator />
                                        </>
                                    )) }
                                </div>
                                <div className="flex flex-col w-full">
                                    <div className="flex bg-primary text-white justify-center items-center">Predicted</div>
                                    <Separator />
                                    { result.predicted.map((item, index) => (
                                        <>
                                            <div key={ index } className={ `flex justify-center items-center ${(item === 1) ? "bg-lime-400" : (item === 2) ? "bg-green-500" : "bg-green-800 text-white"}` }>{ item }</div>
                                            <Separator />
                                        </>
                                    )) }
                                </div>
                                <div className="flex flex-col w-full">
                                    <div className="flex bg-primary text-white justify-center items-center">Status</div>
                                    <Separator />
                                    { result.predicted.map((item, index) => (
                                        <>
                                            <div key={ index } className={ `flex justify-center items-center ${result.actual[index] === result.predicted[index] ? "bg-lime-500" : "bg-red-400"}` }>
                                                { result.actual[index] === result.predicted[index] ? "True" : "False" }
                                            </div>
                                            <Separator />
                                        </>
                                    )) }
                                </div>
                            </div>
                        </>
                    ) }
                </div>
            </main>
        </>
    );
};

export default Testing;
