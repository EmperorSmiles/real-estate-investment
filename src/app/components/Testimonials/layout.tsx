export default async function layout() {
    const url = "https://testimonial.p.rapidapi.com/api";
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
            "X-RapidAPI-Host": "testimonial.p.rapidapi.com",
        },
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }

    return (
        <div>
            <div>
                <h1>Our testimony</h1>
                <p></p>
            </div>
        </div>
    );
}
