import Head from 'next/head'

export const Kontakt = () => {
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
                            pomóc?
                        </p>
                    </div>

                    <div className="mt-8 sm:mx-auto w-full max-w-xl">
                        <div className="bg-white py-4 px-6 shadow rounded-lg sm:px-10">
                            <form className="mb-0 space-y-6" method="post">
                                <div>
                                    <label htmlFor="name">Imię</label>
                                    <input id="name" name="name" type="text" required/>
                                </div>

                                <div>
                                    <label htmlFor="email">Email address</label>
                                    <input id="email" name="email" type="email" autoComplete="email" required/>
                                </div>

                                <div>
                                    <label htmlFor="message">Wiadomość</label>
                                    <textarea id="message" name="message" required/>
                                </div>

                                <div className="flex items-center">
                                    <input id="terms-and-privacy" name="terms-and-privacy" type="checkbox"/>
                                    <label htmlFor="terms-and-privacy" className="ml-2 block text-xs">
                                        Administratorem Pani/Pana danych osobowych jest Revival sp. z o.o. z siedzibą
                                        w&nbsp;Warszawie.
                                        Pani/Pana dane osobowe będą przetwarzane w celu odpowiedzi na zadane pytanie
                                        oraz archiwizacji formularza. Więcej informacji na temat przetwarzania Pani/Pana
                                        danych osobowych znajduje się w Polityce prywatności.
                                    </label>
                                </div>

                                <div className={"flex w-full justify-center"}>
                                    <button type="submit"
                                            className="w-3/4 flex justify-center items-center py-2 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-[#3871c1] hover:bg-[#ffa500] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffa500] duration-300">Wyślij
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Kontakt