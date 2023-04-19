<script lang="ts">
    import ResumeEntry from "../../components/ResumeEntry.svelte";
    import ResumeSection from "../../components/ResumeSection.svelte";

    let Companies = [
        {
        name:"Microsoft",
        description:"Software Engineer II",
        timeframe:"03/2020 - Current",
        href:"https://www.microsoft.com",
        duties: [
            "Software Engineer on AAD Gateway, a reverse proxy service within the Identity organization that serves over 200 billion daily requests.",
            "Led the development of a feature to expose API rate limiting for customers to monitor and manage their usage of B2C login.",
            "Designed and implemented the architecture for a new internal tool used to read the Azure Active Directory states. The tool uses a React web front end with a C\# ASP.NET Core backend.",
            "Leveraged Postman, PowerShell, and Data Explorer to provide live site support to resolve issues and ensure high SLA for AAD Gateway, MS Graph, ESTS, and other AAD services.",
            "Built out several Identity services, such as Azure MFA, into new regions to extend service availability and enable greater security for customers.",
            "Conducted performance evaluations and optimizations of various logging features to ensure AAD Gateway meets COGS and reliability requirements."
        ]
        },
        {
        name:"Northrop Grumman",
        description:"Software Engineer",
        timeframe:"07/2018 - 03/2020",
        href:"https://www.northropgrumman.com",
        duties: [
            "Collaborated with radar domain experts to extend ARSIM in C++, a radar simulation framework, to include new radar modes.",
            "Developed plugins in C++ for AFSIM, a military mission simulation framework, to develop new scenarios.",
            "Implemented a TCP/IP interface to link together two radar simulated systems.",
            "Developed algorithms to allocate radar resources intelligently based on radar data."
        ]
        },
    ];

    let Schools = [
        {
            name: "Georgia Tech University",
            description: "Master's of Science in Computer Science",
            TimeRanges: "08/2013 - 05/2018",
            href: "https://gatech.edu",
            duties: []
        },
        {
            name: "Ohio State University",
            description: "Bachelor's of Science in Mechanical Engineering",
            TimeRanges: "08/2013 - 05/2018",
            href: "https://osu.edu",
            duties: []
        }
    ];

    let ContactLinks = [
        { href:"https://github.com/clay26", name:"GitHub" },
        { href:"/", name:"Website" },
        { href:"mailto:contact@clayjackson.dev", name:"E-Mail" }
    ];
</script>

<div class="flex grow justify-center my-8">
    <div class="flex flex-col flex-grow mx-8 md:max-w-3xl gap-3 text-md md:text-lg">
        <div class="font-extrabold text-gray-700 text-2xl md:text-3xl border-b-2 border-slate-300 py-4">
            <h1>Clay Jackson</h1>
        </div>
        <div class="flex flex-col gap-1">
        <ResumeSection SectionName="Hello!">
            <p>
                I am a software engineer currently working at Microsoft in the Azure Active Directory (AAD) organization. My current focus is on the critical AAD services, such as the API gateway for all of AAD (AAD Gateway) and the token issuance service of AAD (ESTS). Before Microsoft, I worked as a C++ software engineer working on modeling and simulation frameworks for radar systems at Northrop Grumman. In my spare time, I'm always tinkering with new technologies I don't get exposed to in my day job. Stop by my <a class="text-banneraccent hover:text-banneraccentlt" href="https://blog.clayjackson.dev">blog</a> to see my current tech tinkerings.
            </p>
        </ResumeSection>
        <ResumeSection SectionName="Get in Touch">
            <p>
                You can contact me through my e-mail at <a class="text-banneraccent hover:text-banneraccentlt" href="mailto:contact@clayjackson.dev">contact@clayjackson.dev</a>.
            </p>
        </ResumeSection>
        </div>
        <ResumeSection SectionName="Work Experience">
            {#each Companies as Company}
                <ResumeEntry {...Company}/>
            {/each}
        </ResumeSection>
        <ResumeSection SectionName="Education">
            {#each Schools as School}
                <ResumeEntry {...School}/>
            {/each}
        </ResumeSection>
    </div>
</div>