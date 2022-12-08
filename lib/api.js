export const sendMessage = async (data) => {
    await fetch("/api/sendmail", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
    }).then((res)=> {
        if (!res.ok) throw new Error("Nie udało się wysłać wiadomości!");
        return res.json();
    })
}