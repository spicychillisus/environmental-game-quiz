"use client"
import Navbar from "@/components/general/Navbar";
import { useState, useEffect } from "react";
import { Inter, Montserrat } from "next/font/google";
import QuestionDisplay from "@/entities/Question";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link";
import { questions, questionTypes, topics } from "@/data/questions";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useRouter } from 'next/router'
import { useToast } from "@/hooks/use-toast"
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";


const inter = Inter({
    weight: "400",
    style: "normal",
    subsets: ["latin"]
})

const interBold = Inter({
    weight: "600",
    style: "normal",
    subsets: ["latin"]
})

const FormSchema = z.object({
    email: z
      .string({
        required_error: "test",
      })
      .default(""),
  });

// this is home page
const QuizHomePage = () => {

    const { toast } = useToast();
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    const [difficulty, setDifficulty] = useState<string>("easy");
    const [numOfQn, setNumOfQn] = useState<number>(0);

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
          ),
        })
    }

    const selectedTopics = [];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = parseInt(e.target.value, 10);

        // Ensure the value is within the range of 1 to 30
        if (value < 1) value = 1;
        if (value > 30) value = 30;

        setNumOfQn(value); // Update the state
    };

    function selectTopic() {

    }
    
    return (
        <div className="bg-white min-h-screen w-screen">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="text-center mt-10">
                    <p className={`${interBold.className} text-3xl`}>Select the topic you wish to learn about</p>
                    <p className={`${inter.className} text-sm text-gray-600`}>The topics may look boring, but the questions aren't!</p>
                </div>
                <div className="flex flex-row mb-6">
                    {
                        topics.map((topic, index) => {
                            return (
                                <div key={index} className="flex flex-col">
                                    <Card className="w-80 h-30 m-5" onClick={selectTopic}>
                                        <CardHeader>
                                            <CardTitle>{topic.topic}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription>
                                                <p className={`${inter.className} text-sm`}>{topic.description}</p>
                                            </CardDescription>
                                        </CardContent>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="text-center">
                    <h2 className={`${interBold.className} text-3xl`}>Settings</h2>
                    <p className={`${inter.className} text-sm text-gray-600`}>Best to set them to suit your style</p>
                </div>
                <div id="settings-selectors" className="flex justify-center mb-10">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                            <FormField 
                                control={form.control}
                                name="email"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Difficulty</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value} required>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Choose your difficulty"/>
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="easy">Easy</SelectItem>
                                                <SelectItem value="medium">Medium</SelectItem>
                                                <SelectItem value="hard">Hard</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />
                            <FormField 
                                control={form.control}
                                name="email"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Amount of Questions</FormLabel>
                                        <FormControl>
                                            <Input 
                                            placeholder="Enter a value between 1-30" {...field} 
                                            type="number" 
                                            id="qnAmt"
                                            value={numOfQn}
                                            onChange={handleInputChange}
                                        />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </form>            
                    </Form>
                </div>
                <div className="flex justify-center mb-2">
                    <Button className="flex justify-center" type="submit">
                        <Link href={`/quiz?difficulty=easy&qnamt=${numOfQn}&topics=cc+enviro+pce`} className="flex justify-center">Start Quiz</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
    
}

export default QuizHomePage;