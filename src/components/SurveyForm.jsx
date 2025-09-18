import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
        {
            title: "Responsiveness",
            en: "I spent a reasonable amount of time for my transaction.",
            tl: "(Makatwiran ang oras na aking ginugol para sa pagproseso ng aking transaksyon.)",
        },
        {
            title: "Reliability",
            en: "The office followed the transaction’s requirements and steps.",
            tl: "(Sinunod ng opisina ang mga kinakailangan at hakbang ng transaksyon.)",
        },
        {
            title: "Access & Facilities",
            en: "The steps (including payment) I needed to do were easy and simple.",
            tl: "(Ang mga hakbang (kasama ang pagbabayad) na kailangan kong gawin ay madali at simple.)",
        },
        {
            title: "Communication",
            en: "I easily found the information I needed from the office/website.",
            tl: "(Madali kong nahanap ang impormasyong kailangan ko mula sa opisina/website.)",
        },
        {
            title: "Cost",
            en: "I paid a reasonable amount of fees.",
            tl: "(Nakapagbayad ako ng makatwirang halaga ng bayarin.)",
        },
        {
            title: "Integrity",
            en: "I feel the office was fair to everyone.",
            tl: "(Nararamdaman ko na ang opisina ay patas sa lahat.)",
        },
        {
            title: "Assurance",
            en: "I was treated courteously and helped by the staff.",
            tl: "(Ako ay magalang na tinrato at tinulungan ng mga kawani.)",
        },
        {
            title: "Outcome",
            en: "I got what I needed or denial was explained.",
            tl: "(Nakuha ko ang aking kailangan o ipinaliwanag ang dahilan ng pagtanggi.)",
        },
        {
            title: "Overall Satisfaction",
            en: "I am satisfied with the service I availed.",
            tl: "(Ako ay nasiyahan sa serbisyong aking nakuha.)",
        },
    ];

    const options = [
        { en: "Strongly Disagree", tl: "Lubos na Hindi Sumasang-ayon" },
        { en: "Disagree", tl: "Hindi Sumasang-ayon" },
        { en: "Neutral", tl: "Neutral / Wala sa Panig" },
        { en: "Agree", tl: "Sumasang-ayon" },
        { en: "Strongly Agree", tl: "Lubos na Sumasang-ayon" },
        { en: "N/A", tl: "Hindi Aplikable" },
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
                    <div className="space-y-6">
                        {/* Service Availed */}
                        <div className="relative">
                            <input
                                type="text"
                                name="serviceAvailed"
                                value={formData.serviceAvailed}
                                onChange={handleChange}
                                id="serviceAvailed"
                                placeholder=" "
                                className="w-full border-2 border-gray-300 rounded-md px-3 pt-5 pb-2 text-sm focus:border-green-600 focus:ring-0 peer"
                                required
                            />
                            <label
                                htmlFor="serviceAvailed"
                                className="absolute left-3 -top-2.5 bg-white px-1 text-black text-sm transition-all
                 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
                 peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm"
                            >
                                Service Availed{" "}
                                <span className="italic">
                                    (Serbisyong Nakuha)
                                </span>
                            </label>
                        </div>

                        {/* Date of Application + Date of Release */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="relative">
                                <input
                                    type="date"
                                    name="dateApplication"
                                    value={formData.dateApplication}
                                    onChange={handleChange}
                                    id="dateApplication"
                                    placeholder=" "
                                    className="w-full border-2 border-gray-300 rounded-md px-3 pt-5 pb-2 text-sm focus:border-gray-600 focus:ring-0 peer"
                                    required
                                />
                                <label
                                    htmlFor="dateApplication"
                                    className="absolute left-3 -top-2.5 bg-white px-1 text-black text-sm transition-all
                   peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
                   peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                >
                                    Date of Application{" "}
                                    <span className="italic">
                                        (Petsa ng Aplikasyon)
                                    </span>
                                </label>
                            </div>

                            <div className="relative">
                                <input
                                    type="date"
                                    name="dateRelease"
                                    value={formData.dateRelease}
                                    onChange={handleChange}
                                    id="dateRelease"
                                    placeholder=" "
                                    className="w-full border-2 border-gray-300 rounded-md px-3 pt-5 pb-2 text-sm focus:border-green-600 focus:ring-0 peer"
                                    required
                                />
                                <label
                                    htmlFor="dateRelease"
                                    className="absolute left-3 -top-2.5 bg-white px-1 text-gray-600 text-sm transition-all
                   peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
                   peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                >
                                    Date of Release{" "}
                                    <span className="italic">
                                        (Petsa ng Paglabas)
                                    </span>
                                </label>
                            </div>
                        </div>

                        {/* Name */}
                        <div className="relative">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                id="name"
                                placeholder=" "
                                className="w-full border-2 border-gray-300 rounded-md px-3 pt-5 pb-2 text-sm focus:border-green-600 focus:ring-0 peer"
                                required
                            />
                            <label
                                htmlFor="name"
                                className="absolute left-3 -top-2.5 bg-white px-1 text-gray-600 text-sm transition-all
                 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
                 peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm"
                            >
                                Name <span className="italic">(Pangalan)</span>
                            </label>
                        </div>

                        {/* Sex + Email */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="relative">
                                <select
                                    name="sex"
                                    value={formData.sex}
                                    onChange={handleChange}
                                    id="sex"
                                    className="w-full border-2 border-gray-300 rounded-md px-3 pt-5 pb-2 text-sm focus:border-black focus:ring-0 peer appearance-none"
                                    required
                                >
                                    <option
                                        value=""
                                        disabled
                                        className="text-gray-400"
                                    >
                                        Select Sex / Piliin ang Kasarian
                                    </option>
                                    <option value="Male">Male (Lalaki)</option>
                                    <option value="Female">
                                        Female (Babae)
                                    </option>
                                </select>

                                {/* Floating label */}
                                <label
                                    htmlFor="sex"
                                    className="absolute left-3 -top-2.5 bg-white px-1 text-black text-sm transition-all
           peer-placeholder-shown:top-3 peer-placeholder-shown:text-black peer-placeholder-shown:text-base
           peer-focus:-top-2.5 peer-focus:text-black peer-focus:text-sm"
                                >
                                    Sex{" "}
                                    <span className="italic">(Kasarian)</span>
                                </label>

                                {/* Lucide ChevronDown icon */}
                                <ChevronDown
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                                    size={20}
                                />
                            </div>

                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    id="email"
                                    placeholder=" "
                                    className="w-full border-2 border-gray-300 rounded-md px-3 pt-5 pb-2 text-sm focus:border-green-600 focus:ring-0 peer"
                                    required
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-3 -top-2.5 bg-white px-1 text-gray-600 text-sm transition-all
                   peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
                   peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                >
                                    Email Address{" "}
                                    <span className="italic">
                                        (Email Address)
                                    </span>
                                </label>
                            </div>
                        </div>

                        {/* Type of Client */}
                        <div className="relative">
                            <select
                                name="typeClient"
                                value={formData.typeClient}
                                onChange={handleChange}
                                id="typeClient"
                                className="w-full border-2 border-gray-300 rounded-md px-3 pt-5 pb-2 text-sm focus:border-black focus:ring-0 peer appearance-none"
                                required
                            >
                                <option
                                    value=""
                                    disabled
                                    className="text-gray-400"
                                >
                                    Select Type / Piliin ang Uri ng Kliyente
                                </option>
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

                            {/* Floating label */}
                            <label
                                htmlFor="typeClient"
                                className="absolute left-3 -top-2.5 bg-white px-1 text-black text-sm transition-all
           peer-placeholder-shown:top-3 peer-placeholder-shown:text-black peer-placeholder-shown:text-base
           peer-focus:-top-2.5 peer-focus:text-black peer-focus:text-sm"
                            >
                                Type of Client{" "}
                                <span className="italic">
                                    (Uri ng Kliyente)
                                </span>
                            </label>

                            {/* Lucide ChevronDown icon */}
                            <ChevronDown
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                                size={20}
                            />
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

                        {/* Table header */}
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-gray-300">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-4 py-2 text-left text-base font-semibold">
                                            Questions
                                        </th>
                                        {options.map((opt) => (
                                            <th
                                                key={opt.en}
                                                className="px-4 py-2 text-center"
                                            >
                                                <div className="text-sm font-medium">
                                                    {opt.en}
                                                </div>
                                                <div className="text-xs italic text-gray-600">
                                                    {opt.tl}
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>

                                <tbody>
                                    {surveyQuestions.map((q, idx) => (
                                        <tr key={idx} className="border-t">
                                            {/* Question column */}
                                            <td className="px-4 py-4">
                                                <p className="text-lg font-bold text-green-700">
                                                    {q.title}
                                                </p>
                                                <p className="text-base font-medium">
                                                    {q.en}
                                                </p>
                                                <p className="text-sm italic text-gray-600">
                                                    {q.tl}
                                                </p>
                                            </td>

                                            {/* Options row */}
                                            {options.map((opt) => (
                                                <td
                                                    key={opt.en}
                                                    className="px-4 py-3 text-center"
                                                >
                                                    <input
                                                        type="radio"
                                                        name={`q-${idx}`}
                                                        value={opt.en}
                                                        checked={
                                                            formData.ratings[
                                                                q.en
                                                            ] === opt.en
                                                        }
                                                        onChange={() =>
                                                            handleRatingChange(
                                                                q.en,
                                                                opt.en
                                                            )
                                                        }
                                                        className="w-5 h-5 text-green-700 focus:ring-green-600"
                                                        required
                                                    />
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
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
                            className="w-full border p-2 rounded resize-y min-h-[80px] max-h-[200px] focus:ring-1 focus:ring-green-600"
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
                            Back
                        </button>
                        <button
                            type="submit"
                            className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800"
                        >
                            Submit Survey
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default SurveyForm;
