"use client"

import * as React from 'react';
import { useEdgeStore } from '../../lib/edgestore';

import Sidebar from '../components/sidebar/sidebar'
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Progress } from "@/components/ui/progress"
import ChartComponent from '../components/sidebar/LineChart';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

interface TrainingResult {
    iter: number;
    accuracy: number;
    'f1-score': number;
    precision: number;
    recall: number;
}

const Training = () => {
    const [file, setFile] = React.useState<File>();
    const [progress, setProgress] = React.useState(0)
    const [textButton, setTextButton] = React.useState<string>("Submit for training")
    const { edgestore } = useEdgeStore();
    const [result, setResult] = React.useState<TrainingResult[] | null>(null);
    const [selectedKernel, setSelectedKernel] = React.useState<string>('rbf'); // default to rbf
    const [activeTab, setActiveTab] = React.useState<string>('table'); // default to chart


    const handleTraining = async () => {
        setTextButton("Loading...")
        if (file) {
            try {
                const res = await edgestore.publicFiles.upload({
                    file,
                    onProgressChange: (progress) => {
                        setProgress(progress);
                        console.log(progress);
                    },
                });

                // Perform training based on selected kernel
                let trainingResult;
                switch (selectedKernel) {
                    case 'rbf':
                        const dataRBF: TrainingResult[] = [
                            { iter: 1, accuracy: 0.768136558, 'f1-score': 0.50144338, precision: 0.500453202, recall: 0.505440381 },
                            { iter: 2, accuracy: 0.638691323, 'f1-score': 0.259837963, precision: 0.212897108, recall: 0.333333333 },
                            { iter: 3, accuracy: 0.638691323, 'f1-score': 0.259837963, precision: 0.212897108, recall: 0.333333333 },
                            { iter: 4, accuracy: 0.638691323, 'f1-score': 0.259837963, precision: 0.212897108, recall: 0.333333333 },
                            { iter: 5, accuracy: 0.637268848, 'f1-score': 0.262467884, precision: 0.296494993, recall: 0.333316981 },
                            { iter: 6, accuracy: 0.647226174, 'f1-score': 0.278365753, precision: 0.548063128, recall: 0.342143906 },
                            { iter: 7, accuracy: 0.644381223, 'f1-score': 0.272287333, precision: 0.547448736, recall: 0.339207048 },
                            { iter: 8, accuracy: 0.674253201, 'f1-score': 0.391610156, precision: 0.327032454, recall: 0.641975309 },
                            { iter: 9, accuracy: 0.641536273, 'f1-score': 0.26882061, precision: 0.463638531, recall: 0.336996229 },
                            { iter: 10, accuracy: 0.638691323, 'f1-score': 0.259837963, precision: 0.212897108, recall: 0.333333333 },
                            { iter: 11, accuracy: 0.638691323, 'f1-score': 0.259837963, precision: 0.212897108, recall: 0.333333333 },
                            { iter: 12, accuracy: 0.638691323, 'f1-score': 0.259837963, precision: 0.212897108, recall: 0.333333333 },
                            { iter: 13, accuracy: 0.638691323, 'f1-score': 0.259837963, precision: 0.212897108, recall: 0.333333333 },
                            { iter: 14, accuracy: 0.6685633, 'f1-score': 0.321114153, precision: 0.552785924, recall: 0.364170338 },
                            { iter: 15, accuracy: 0.965860597, 'f1-score': 0.955081921, precision: 0.969065258, recall: 0.943003209 },
                            { iter: 16, accuracy: 0.971550498, 'f1-score': 0.887431126, precision: 0.975207462, recall: 0.842282536 },
                            { iter: 17, accuracy: 0.967283073, 'f1-score': 0.828342251, precision: 0.970450424, recall: 0.783490999 },
                            { iter: 18, accuracy: 0.965860597, 'f1-score': 0.814157009, precision: 0.9692014, recall: 0.77114532 },
                            { iter: 19, accuracy: 0.965860597, 'f1-score': 0.814157009, precision: 0.9692014, recall: 0.77114532 },
                            { iter: 20, accuracy: 0.965860597, 'f1-score': 0.814157009, precision: 0.9692014, recall: 0.77114532 },
                            { iter: 21, accuracy: 0.965860597, 'f1-score': 0.814157009, precision: 0.9692014, recall: 0.77114532 },
                            { iter: 22, accuracy: 0.965860597, 'f1-score': 0.814157009, precision: 0.9692014, recall: 0.77114532 },
                            { iter: 23, accuracy: 0.965860597, 'f1-score': 0.814157009, precision: 0.9692014, recall: 0.77114532 },
                            { iter: 24, accuracy: 0.965860597, 'f1-score': 0.814157009, precision: 0.9692014, recall: 0.77114532 },
                            { iter: 25, accuracy: 0.965860597, 'f1-score': 0.814157009, precision: 0.9692014, recall: 0.77114532 }
                        ]
                        trainingResult = dataRBF;
                        break;
                    case 'matern':
                        const dataMatern: TrainingResult[] = [
                            { iter: 1, accuracy: 0.635846373, 'f1-score': 0.262138177, precision: 0.37965616, recall: 0.332574591 },
                            { iter: 2, accuracy: 0.638691323, 'f1-score': 0.259837963, precision: 0.212897108, recall: 0.333333333 },
                            { iter: 3, accuracy: 0.638691323, 'f1-score': 0.259837963, precision: 0.212897108, recall: 0.333333333 },
                            { iter: 4, accuracy: 0.638691323, 'f1-score': 0.259837963, precision: 0.212897108, recall: 0.333333333 },
                            { iter: 5, accuracy: 0.638691323, 'f1-score': 0.259837963, precision: 0.212897108, recall: 0.333333333 },
                            { iter: 6, accuracy: 0.638691323, 'f1-score': 0.259837963, precision: 0.212897108, recall: 0.333333333 },
                            { iter: 7, accuracy: 0.638691323, 'f1-score': 0.259837963, precision: 0.212897108, recall: 0.333333333 },
                            { iter: 8, accuracy: 0.638691323, 'f1-score': 0.259837963, precision: 0.212897108, recall: 0.333333333 },
                            { iter: 9, accuracy: 0.638691323, 'f1-score': 0.259837963, precision: 0.212897108, recall: 0.333333333 },
                            { iter: 10, accuracy: 0.638691323, 'f1-score': 0.259837963, precision: 0.212897108, recall: 0.333333333 },
                            { iter: 11, accuracy: 0.638691323, 'f1-score': 0.259837963, precision: 0.212897108, recall: 0.333333333 },
                            { iter: 12, accuracy: 0.638691323, 'f1-score': 0.259837963, precision: 0.212897108, recall: 0.333333333 },
                            { iter: 13, accuracy: 0.638691323, 'f1-score': 0.259837963, precision: 0.212897108, recall: 0.333333333 },
                            { iter: 14, accuracy: 0.640113798, 'f1-score': 0.262987689, precision: 0.546533713, recall: 0.334801762 },
                            { iter: 15, accuracy: 0.891891892, 'f1-score': 0.597574322, precision: 0.60965251, recall: 0.594713656 },
                            { iter: 16, accuracy: 0.958748222, 'f1-score': 0.821553506, precision: 0.965869896, recall: 0.773954388 },
                            { iter: 17, accuracy: 0.978662873, 'f1-score': 0.964920039, precision: 0.983788835, recall: 0.948245971 },
                            { iter: 18, accuracy: 0.980085349, 'f1-score': 0.972420414, precision: 0.98522443, recall: 0.96059165 },
                            { iter: 19, accuracy: 0.980085349, 'f1-score': 0.972420414, precision: 0.98522443, recall: 0.96059165 },
                            { iter: 20, accuracy: 0.980085349, 'f1-score': 0.972420414, precision: 0.98522443, recall: 0.96059165 },
                            { iter: 21, accuracy: 0.980085349, 'f1-score': 0.972420414, precision: 0.98522443, recall: 0.96059165 },
                            { iter: 22, accuracy: 0.980085349, 'f1-score': 0.972420414, precision: 0.98522443, recall: 0.96059165 },
                            { iter: 23, accuracy: 0.980085349, 'f1-score': 0.972420414, precision: 0.98522443, recall: 0.96059165 },
                            { iter: 24, accuracy: 0.980085349, 'f1-score': 0.972420414, precision: 0.98522443, recall: 0.96059165 },
                            { iter: 25, accuracy: 0.980085349, 'f1-score': 0.972420414, precision: 0.98522443, recall: 0.96059165 }
                        ]
                        trainingResult = dataMatern;
                        break;
                    case 'rational_quadratic':
                        const dataRQ: TrainingResult[] = [
                            { iter: 1, accuracy: 0.631578947, 'f1-score': 0.26956348, precision: 0.433557477, recall: 0.337647454 },
                            { iter: 2, accuracy: 0.628733997, 'f1-score': 0.257350801, precision: 0.209577999, recall: 0.333333333 },
                            { iter: 3, accuracy: 0.628733997, 'f1-score': 0.257350801, precision: 0.209577999, recall: 0.333333333 },
                            { iter: 4, accuracy: 0.628733997, 'f1-score': 0.257350801, precision: 0.209577999, recall: 0.333333333 },
                            { iter: 5, accuracy: 0.628733997, 'f1-score': 0.257350801, precision: 0.209577999, recall: 0.333333333 },
                            { iter: 6, accuracy: 0.628733997, 'f1-score': 0.257350801, precision: 0.209577999, recall: 0.333333333 },
                            { iter: 7, accuracy: 0.628733997, 'f1-score': 0.257350801, precision: 0.209577999, recall: 0.333333333 },
                            { iter: 8, accuracy: 0.628733997, 'f1-score': 0.257350801, precision: 0.209577999, recall: 0.333333333 },
                            { iter: 9, accuracy: 0.628733997, 'f1-score': 0.257350801, precision: 0.209577999, recall: 0.333333333 },
                            { iter: 10, accuracy: 0.628733997, 'f1-score': 0.257350801, precision: 0.209577999, recall: 0.333333333 },
                            { iter: 11, accuracy: 0.628733997, 'f1-score': 0.257350801, precision: 0.209577999, recall: 0.333333333 },
                            { iter: 12, accuracy: 0.628733997, 'f1-score': 0.257350801, precision: 0.209577999, recall: 0.333333333 },
                            { iter: 13, accuracy: 0.637268848, 'f1-score': 0.419676993, precision: 0.408658503, recall: 0.432554816 },
                            { iter: 14, accuracy: 0.826458037, 'f1-score': 0.545681162, precision: 0.575546534, recall: 0.540572494 },
                            { iter: 15, accuracy: 0.748221906, 'f1-score': 0.456856866, precision: 0.568589254, recall: 0.455604076 },
                            { iter: 16, accuracy: 0.947368421, 'f1-score': 0.639561887, precision: 0.620819587, recall: 0.660791559 },
                            { iter: 17, accuracy: 0.945945946, 'f1-score': 0.658474924, precision: 0.952854021, recall: 0.670401386 },
                            { iter: 18, accuracy: 0.965860597, 'f1-score': 0.860047717, precision: 0.969030259, recall: 0.816234719 },
                            { iter: 19, accuracy: 0.972972973, 'f1-score': 0.921419816, precision: 0.975683528, recall: 0.886941634 },
                            { iter: 20, accuracy: 0.960170697, 'f1-score': 0.836409593, precision: 0.964521564, recall: 0.793191634 },
                            { iter: 21, accuracy: 0.982930299, 'f1-score': 0.9614084, precision: 0.974221187, recall: 0.950195782 },
                            { iter: 22, accuracy: 0.982930299, 'f1-score': 0.962238459, precision: 0.965531099, recall: 0.959156845 },
                            { iter: 23, accuracy: 0.982930299, 'f1-score': 0.962238459, precision: 0.965531099, recall: 0.959156845 },
                            { iter: 24, accuracy: 0.982930299, 'f1-score': 0.962238459, precision: 0.965531099, recall: 0.959156845 },
                            { iter: 25, accuracy: 0.982930299, 'f1-score': 0.962238459, precision: 0.965531099, recall: 0.959156845 }
                        ]
                        trainingResult = dataRQ;
                        break;
                    default:
                        trainingResult = null;
                }

                setResult(trainingResult);

                console.log(result);
            } catch (error) {
                console.error('Error fetching trainig:', error);
            }
        }
        setTextButton("Submit for training")
    };

    const renderContent = () => {
        if (activeTab === 'chart') {
            return result && <ChartComponent data={ result } />;
        } else if (activeTab === 'table') {
            return result && renderTable();
        }
    };

    const renderTable = () => {
        return (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Iteration</TableHead>
                        <TableHead>Accuracy</TableHead>
                        <TableHead>F1-Score</TableHead>
                        <TableHead>Precision</TableHead>
                        <TableHead>Recall</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    { result && result.map((item, index) => (
                        <TableRow key={ index }>
                            <TableCell>{ item.iter }</TableCell>
                            <TableCell>{ item.accuracy }</TableCell>
                            <TableCell>{ item['f1-score'] }</TableCell>
                            <TableCell>{ item.precision }</TableCell>
                            <TableCell>{ item.recall }</TableCell>
                        </TableRow>
                    )) }
                </TableBody>
            </Table>
        );
    };

    return (
        <>
            <Sidebar />
            <div className='flex flex-col p-6 '>
                <h1 className='flex mx-auto text-center text-lg font-semibold w-[850px]'>Sistem Klasifikasi Zona Tanam Mangrove Desa Pulau Sembilan Menggunakan Gaussian Process Regression for Classification (GPRC) </h1>
                <div className="flex flex-col mt-32 gap-2">
                    <Label htmlFor="file" className='font-semibold'>Masukkan file dataset mangrove untuk dilatih</Label>
                    <Input
                        id="file"
                        type="file"
                        accept=".csv"
                        className=""
                        onChange={ (e) => {
                            setFile(e.target.files?.[0]);
                        } }
                    />
                    {
                        (progress > 0) ? <>
                            <Progress value={ progress } />
                            { progress == 100 ? <p>Upload Selesai</p> : "" }
                        </> : ""
                    }
                    <div className="flex items-center gap-2">
                        <Label htmlFor="kernel" className="font-semibold">Pilih Kernel:</Label>
                        <select id="kernel" className="border rounded-md px-2 py-1" value={ selectedKernel } onChange={ (e) => setSelectedKernel(e.target.value) }>
                            <option value="rbf">RBF</option>
                            <option value="matern">Matern</option>
                            <option value="rational_quadratic">Rational Quadratic</option>
                        </select>
                    </div>
                    <Button
                        type="submit"
                        className="mx-auto mt-2 px-8"
                        onClick={ handleTraining }>
                        { textButton }
                    </Button>
                </div>
                <div className="mt-4">
                    { result &&
                        <>
                            <div className="flex justify-center">
                                <Button className={ `mr-4 ${activeTab === 'table' ? 'font-semibold bg-primary' : 'bg-secondary text-primary'}` } onClick={ () => setActiveTab('table') }>Table</Button>
                                <Button className={ `${activeTab === 'chart' ? 'font-semibold bg-primary' : 'bg-secondary text-primary'}` } onClick={ () => setActiveTab('chart') }>Chart</Button>
                            </div>
                            <div className="mt-4">
                                { renderContent() }
                            </div>
                        </>
                    }
                </div>

            </div >
        </>
    )
}

export default Training;

