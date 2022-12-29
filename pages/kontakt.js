import Head from 'next/head'
import {Button, FormControl, FormErrorMessage, FormLabel, Input, Textarea,} from "@chakra-ui/react";
import {useState} from "react";
import {sendMessage} from "../lib/api";
import { useRouter } from 'next/router';
import pl from "../locales/pl";
import en from "../locales/en";

const initialValues = {name: "", email: "", message: ""}
const initialState = {values: initialValues}

export const Kontakt = () => {
    const routerTranslation = useRouter();
    const { locale } = routerTranslation ;
    const t = locale === 'pl' ? pl : en;
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
                <title>{t.ContactPageTitle}</title>
                <meta name="description"
                      content={t.ContactMetaDescription}/>
            </Head>

            <main className={"container max-w-screen-2xl mx-auto px-5"}>
                <div className="flex flex-col justify-center py-4">
                    <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
                        <h1 className={"dark:text-white"}>{t.ContactTitlePart1}<span
                            className={"text-[#ffa500]"}>{t.ContactTitlePart2}</span></h1>
                            <p className="mt-4 text-center text-md text-gray-600 font-semibold dark:text-white max-w-5xl">{t.ContactCallToAction}</p>

                        {error && (
                            <p className={"text-gray-800 font-semibold text-md text-center mt-2  mb-0 dark:text-white"}>{error}</p>
                        )}

                        {success && (
                            <p className={"text-[#3871c1] font-bold text-md text-center mt-2  mb-0 dark:text-white"}>{t.ContactSuccessMessage}</p>
                        )}

                    </div>

                    <div className="mt-8 sm:mx-auto w-full max-w-xl">
                        <div className="bg-white ay py-4 px-6 shadow-xl rounded-lg sm:px-10">
                            <FormControl isRequired mb={10} isInvalid={clicked.name && !values.name}>
                                <FormLabel className={"text-gray-500 mb-1 ml-1"}>{t.ContactFormFiledName}</FormLabel>
                                <Input
                                    type={"text"}
                                    name={"name"}
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={onBlur}
                                />
                                <FormErrorMessage className={"text-[#ffa500] text-xs font-bold mt-1 ml-1"}>{t.ContactFormFieldRequired}</FormErrorMessage>
                            </FormControl>
                            <FormControl isRequired mb={10} isInvalid={clicked.email && !values.email}>
                                <FormLabel className={"text-gray-500 mb-1 ml-1"}>{t.ContactFormFiledEmail}</FormLabel>
                                <Input
                                    type={"email"}
                                    name={"email"}
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={onBlur}
                                />
                                <FormErrorMessage className={"text-[#ffa500] text-xs font-bold mt-1 ml-1"}> {t.ContactFormFieldRequired}</FormErrorMessage>
                            </FormControl>
                            <FormControl isRequired mb={10} isInvalid={clicked.message && !values.message}>
                                <FormLabel className={"text-gray-500 mb-1 ml-1"}>{t.ContactFormFiledMessage}</FormLabel>
                                <Textarea
                                    type={"text"}
                                    name={"message"}
                                    rows={3}
                                    value={values.message}
                                    onChange={handleChange}
                                    onBlur={onBlur}
                                />
                                <FormErrorMessage className={"text-[#ffa500] text-xs font-bold mt-1 ml-1"}> {t.ContactFormFieldRequired}</FormErrorMessage>
                            </FormControl>
                            <div className="flex items-center mt-2">
                                <input id="terms-and-privacy" name="terms-and-privacy" type="checkbox" required/>
                                <label htmlFor="terms-and-privacy" className="ml-2 block text-xs mt-2">
                                    {t.ContactFormGDPRCheckbox}
                                </label>
                            </div>
                            <div className={"flex w-full justify-center mt-4"}>
                                <Button aria-label={"Wyślij wiadomość"}
                                    className={"w-1/2 flex justify-center items-center py-2 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-[#3871c1] hover:bg-[#ffa500] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffa500] duration-400"}
                                    disabled={!values.name || !values.email || !values.message}
                                    isLoading={isLoading}
                                    onClick={onSubmit}>{t.ContactFormSendButton}</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Kontakt