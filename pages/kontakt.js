import Head from 'next/head'
import {Button, FormControl, FormErrorMessage, FormLabel, Input, Textarea,} from "@chakra-ui/react";
import {useState} from "react";
import {sendMessage} from "../lib/api";

const initialValues = {name: "", email: "", message: ""}
const initialState = {values: initialValues}

function ChakraProvider() {
    return null;
}

export const Kontakt = () => {
    const [success, setSuccess] = useState(false);
    const [state, setState] = useState(initialState)
    const [clicked, setClicked] = useState({})

    const onBlur = ({target}) => setClicked((prev) => ({
        ...prev,
        [target.name]: true,
    }))

    const {values, isLoading, error} = state
    const handleChange = ({target}) => {
        setState((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [target.name]: target.value
            }
        }));
    }

    const onSubmit = async () => {
        setState((prev) => ({
            ...prev,
            isLoading: true
        }));
        try {
            await sendMessage(values);
            setClicked({});
            setState(initialState)
            setSuccess(true)

        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error.message
            }));
        }
    }

    return (
        <>
            <Head>
                <title>Revival - czekamy na Twoją wiadomość</title>
                <meta name="description"
                      content="Czekamy z niecierpliwością na Twoją wiadomość - daj nam znać jak możemy Ci pomóc?"/>
            </Head>

            <main>
                <div className="flex flex-col justify-center py-8 px-6 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-lg">
                        <h1 className={"dark:text-white"}>Czekamy na <span
                            className={"text-[#ffa500]"}>Twoją wiadomość!</span></h1>
                        <p className="mt-2 text-center text-sm text-gray-600 font-semibold">Daj znać jak możemy Ci
                            pomóc!
                        </p>
                        {error && (
                            <p className={"text-gray-800 font-semibold text-md text-center mt-2  mb-0 dark:text-white"}>{error}</p>
                        )}

                        {success && (
                            <p className={"text-[#3871c1] font-bold text-md text-center mt-2  mb-0 dark:text-white"}>Wiadomość została wysłana!</p>
                        )}

                    </div>

                    <div className="mt-8 sm:mx-auto w-full max-w-xl">
                        <div className="bg-white ay py-4 px-6 shadow-xl rounded-lg sm:px-10">
                            <FormControl isRequired mb={10} isInvalid={clicked.name && !values.name}>
                                <FormLabel className={"text-gray-500 mb-1 ml-1"}>Imię</FormLabel>
                                <Input
                                    type={"text"}
                                    name={"name"}
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={onBlur}
                                />
                                <FormErrorMessage className={"text-[#ffa500] text-xs font-bold mt-1 ml-1"}> Pole jest
                                    wymagane </FormErrorMessage>
                            </FormControl>
                            <FormControl isRequired mb={10} isInvalid={clicked.email && !values.email}>
                                <FormLabel className={"text-gray-500 mb-1 ml-1"}>Adres e-mail </FormLabel>
                                <Input
                                    type={"email"}
                                    name={"email"}
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={onBlur}
                                />
                                <FormErrorMessage className={"text-[#ffa500] text-xs font-bold mt-1 ml-1"}> Pole jest
                                    wymagane </FormErrorMessage>
                            </FormControl>
                            <FormControl isRequired mb={10} isInvalid={clicked.message && !values.message}>
                                <FormLabel className={"text-gray-500 mb-1 ml-1"}>Wiadomość</FormLabel>
                                <Textarea
                                    type={"text"}
                                    name={"message"}
                                    rows={3}
                                    value={values.message}
                                    onChange={handleChange}
                                    onBlur={onBlur}
                                />
                                <FormErrorMessage className={"text-[#ffa500] text-xs font-bold mt-1 ml-1"}> Pole jest
                                    wymagane </FormErrorMessage>
                            </FormControl>
                            <div className="flex items-center mt-2">
                                <input id="terms-and-privacy" name="terms-and-privacy" type="checkbox" required/>
                                <label htmlFor="terms-and-privacy" className="ml-2 block text-xs mt-2">
                                    Administratorem Pani/Pana danych osobowych jest Revival sp. z o.o. z siedzibą
                                    w&nbsp;Warszawie.
                                    Pani/Pana dane osobowe będą przetwarzane w&nbsp;celu odpowiedzi na zadane
                                    pytanie
                                    oraz archiwizacji formularza. Więcej informacji na temat przetwarzania Pani/Pana
                                    danych osobowych znajduje się w&nbsp;Polityce prywatności.
                                </label>
                            </div>
                            <div className={"flex w-full justify-center mt-4"}>
                                <Button
                                    className={"w-1/2 flex justify-center items-center py-2 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-[#3871c1] hover:bg-[#ffa500] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffa500] duration-400"}
                                    disabled={!values.name || !values.email || !values.message}
                                    isLoading={isLoading}
                                    onClick={onSubmit}>Wyślij</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Kontakt