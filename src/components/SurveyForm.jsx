import { useState } from "react";

const SurveyForm = () => {
    const [step, setStep] = useState(1); // steps: 1 = consent, 2 = intro, 3 = survey
    const [consent, setConsent] = useState(false);

    const [formData, setFormData] = useState({
        serviceAvailed: "",
        dateApplication: "",
        dateRelease: "",
        name: "",
        sex: "",
        age: "",
        email: "",
        phone: "",
        typeClient: "",
        ratings: {},
        comments: "",
        signature: "",
    });

    const surveyQuestions = [
        "I spent a reasonable amount of time for my transaction. (Responsiveness)",
        "The office followed the transaction’s requirements and steps. (Reliability)",
        "The steps (including payment) I needed to do were easy and simple. (Access & Facilities)",
        "I easily found the information I needed from the office/website. (Communication)",
        "I paid a reasonable amount of fees. (Cost)",
        "I feel the office was fair to everyone. (Integrity)",
        "I was treated courteously and helped by the staff. (Assurance)",
        "I got what I needed or denial was explained. (Outcome)",
        "I am satisfied with the service I availed.",
    ];

    const options = [
        "Strongly Disagree",
        "Disagree",
        "Neutral",
        "Agree",
        "Strongly Agree",
        "N/A",
    ];

    const handleNext = () => {
        if (step === 1 && !consent) {
            alert("⚠️ Please agree to the privacy policy before proceeding.");
            return;
        }
        setStep(step + 1);
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRatingChange = (question, value) => {
        setFormData({
            ...formData,
            ratings: { ...formData.ratings, [question]: value },
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Survey Submitted:", formData);
        alert("✅ Thank you! Your survey has been submitted.");
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-12 py-10 bg-gray-50 rounded-md shadow-md">
            {/* ================= Step 1: Consent ================= */}
            {step === 1 && (
                <>
                    <div className="bg-white p-6 rounded shadow-sm mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            HELP US SERVE YOU BETTER!
                        </h2>
                        <p className="italic text-gray-700 mb-6 text-lg">
                            (TULUNGAN MO KAMI MAS MAPABUTI AT AMING MGA PROSESO
                            AT SERBISYO!)
                        </p>

                        <p className="text-base text-gray-700 mb-4 leading-relaxed">
                            This Client Satisfaction Measurement (CSM) tracks
                            the customer experience of government offices. Your
                            feedback on your recently{" "}
                            <span className="underline font-semibold">
                                concluded transaction
                            </span>{" "}
                            will help DENR provide a better service. This
                            personal information you share will be kept
                            confidential, and you always have the option to not
                            answer this form.
                        </p>

                        <p className="text-base text-gray-700 italic leading-relaxed">
                            (Ang Client Satisfaction Measurement (CSM) ay
                            naglalayong masubaybayan ang karanasan ng taumbayan
                            hinggil sa kanilang pakikitransaksyon sa DENR.
                            Makakatulong ang inyong kasagutan ukol sa inyong
                            naging karanasan sa{" "}
                            <span className="underline font-semibold">
                                kakatapos lamang na transaksyon
                            </span>
                            , upang mas mapabuti at lalong mapahusay ang aming
                            serbisyo publiko. Ang personal na impormasyong
                            inyong ibabahagi ay mananatiling kumpidensyal.
                            Maaari ring piliin na hindi sagutan ang serbey na
                            ito.)
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded shadow-sm mb-6">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">
                            Data Privacy Consent
                        </h2>
                        <p className="text-base text-gray-700 mb-4 leading-relaxed">
                            By checking the checkbox, I hereby consent DENR to
                            collect, process, transmit and store the data
                            provided herein subject to the rules and regulations
                            set by Republic Act No. 10173, otherwise known as
                            the Data Privacy Act of 2012.
                        </p>
                        <p className="text-base text-gray-700 mb-4 italic leading-relaxed">
                            (Sa pamamagitan ng pag pindot ng check sa checkbox,
                            pinahihintulutan ko ang DENR na kolektahin,
                            iproseso, ipadala, at itago ang mga impormasyon na
                            nakasaad sa papel na ito alinsunod sa Batas
                            Republika Blg. 10173 o ang Data Privacy Act of
                            2012.)
                        </p>

                        <label className="flex items-start gap-2 text-base text-gray-700">
                            <input
                                type="checkbox"
                                checked={consent}
                                onChange={() => setConsent(!consent)}
                                className="mt-1 w-5 h-5 text-green-700 border-gray-300 rounded focus:ring-0"
                            />
                            <span>
                                By checking the box, I agree that I have read
                                the privacy policy
                                <br />
                                <span className="italic">
                                    (Sa pamamagitan ng pag ng check sa kahon,
                                    sumasang-ayon ako na nabasa ko ang patakaran
                                    sa privacy)
                                </span>
                            </span>
                        </label>
                    </div>

                    <div className="flex justify-end">
                        {" "}
                        <button
                            onClick={handleNext}
                            className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded"
                        >
                            {" "}
                            Next{" "}
                        </button>{" "}
                    </div>
                </>
            )}

            {/* ================= Step 2: Survey Form ================= */}
            {step === 2 && (
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-6 rounded shadow space-y-6"
                >
                    <h1 className="text-2xl font-bold text-green-800 mb-4">
                        DENR Client Satisfaction Survey <br />
                        <span className="italic text-gray-700">
                            (Survey ng Kasiyahan ng Kliyente ng DENR)
                        </span>
                    </h1>

                    {/* Basic Information */}
                    <div className="space-y-4">
                        {/* Service Availed - full row */}
                        <div>
                            <label className="block font-medium">
                                Service Availed{" "}
                                <span className="italic text-gray-600">
                                    (Serbisyong Nakuha)
                                </span>
                            </label>
                            <input
                                type="text"
                                name="serviceAvailed"
                                value={formData.serviceAvailed}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                placeholder="Service Availed"
                                required
                            />
                        </div>

                        {/* Date of Application + Date of Release in same row */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block font-medium">
                                    Date of Application{" "}
                                    <span className="italic text-gray-600">
                                        (Petsa ng Pag-apply)
                                    </span>
                                </label>
                                <input
                                    type="date"
                                    name="dateApplication"
                                    value={formData.dateApplication}
                                    onChange={handleChange}
                                    className="w-full border p-2 rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block font-medium">
                                    Date of Release{" "}
                                    <span className="italic text-gray-600">
                                        (Petsa ng Paglabas)
                                    </span>
                                </label>
                                <input
                                    type="date"
                                    name="dateRelease"
                                    value={formData.dateRelease}
                                    onChange={handleChange}
                                    className="w-full border p-2 rounded"
                                    required
                                />
                            </div>
                        </div>

                        {/* Name - full row */}
                        <div>
                            <label className="block font-medium">
                                Name{" "}
                                <span className="italic text-gray-600">
                                    (Pangalan)
                                </span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                placeholder="Name"
                                required
                            />
                        </div>

                        {/* Sex + Email Address */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block font-medium">
                                    Sex{" "}
                                    <span className="italic text-gray-600">
                                        (Kasarian)
                                    </span>
                                </label>
                                <select
                                    name="sex"
                                    value={formData.sex}
                                    onChange={handleChange}
                                    className="w-full border p-2 rounded"
                                    required
                                >
                                    <option value="">Select</option>
                                    <option value="Male">Male (Lalaki)</option>
                                    <option value="Female">
                                        Female (Babae)
                                    </option>
                                </select>
                            </div>
                            <div>
                                <label className="block font-medium">
                                    Email Address{" "}
                                    <span className="italic text-gray-600">
                                        (Email Address)
                                    </span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border p-2 rounded"
                                    placeholder="Email Address"
                                    required
                                />
                            </div>
                        </div>

                        {/* Type of Client - full row */}
                        <div>
                            <label className="block font-medium">
                                Type of Client{" "}
                                <span className="italic text-gray-600">
                                    (Uri ng Kliyente)
                                </span>
                            </label>
                            <select
                                name="typeClient"
                                value={formData.typeClient}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            >
                                <option value="">Select</option>
                                <option value="Citizen">
                                    Citizen / Individual (Mamamayan)
                                </option>
                                <option value="Business">
                                    Business / Company (Negosyo / Kumpanya)
                                </option>
                                <option value="Organization">
                                    Organization / PO (Organisasyon / PO)
                                </option>
                                <option value="Government">
                                    Government (Pamahalaan)
                                </option>
                            </select>
                        </div>
                    </div>

                    {/* Survey Questions */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-green-700">
                            Survey Questions <br />
                            <span className="italic text-gray-700">
                                (Mga Tanong sa Survey)
                            </span>
                        </h2>
                        {surveyQuestions.map((q, idx) => (
                            <div
                                key={idx}
                                className="grid grid-cols-1 md:grid-cols-2 items-center border-b pb-4 gap-4"
                            >
                                {/* Question - Left Side */}
                                <p className="font-medium">{q}</p>

                                {/* Options - Right Side */}
                                <div className="flex flex-wrap gap-4 md:justify-end">
                                    {options.map((opt) => (
                                        <label
                                            key={opt}
                                            className="flex items-center space-x-1"
                                        >
                                            <input
                                                type="radio"
                                                name={`q-${idx}`}
                                                value={opt}
                                                checked={
                                                    formData.ratings[q] === opt
                                                }
                                                onChange={() =>
                                                    handleRatingChange(q, opt)
                                                }
                                                required
                                            />
                                            <span className="text-sm">
                                                {opt}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Comments */}
                    <div>
                        <label className="block font-medium">
                            Suggestions/Comments{" "}
                            <span className="italic text-gray-600">
                                (Mga Suhestiyon/Komento)
                            </span>
                        </label>
                        <textarea
                            name="comments"
                            value={formData.comments}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            rows="3"
                            placeholder="Type here / Mag-type dito"
                        ></textarea>
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={handleBack}
                            className="bg-gray-400 hover:bg-gray-500 text-white font-semibold px-6 py-2 rounded"
                        >
                            Back <span className="italic">(Bumalik)</span>
                        </button>
                        <button
                            type="submit"
                            className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800"
                        >
                            Submit Survey{" "}
                            <span className="italic">(Ipasa ang Survey)</span>
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default SurveyForm;
