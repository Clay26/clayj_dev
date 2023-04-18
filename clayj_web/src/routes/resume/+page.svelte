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
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend mi in. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Egestas congue quisque egestas diam in arcu. Lectus magna fringilla urna porttitor rhoncus dolor. Elit eget gravida cum sociis natoque penatibus.
            </p>
            {#each ContactLinks as {href, name}}
                <a {href} class="text-banneraccent hover:text-banneraccentlt self-start">{name}</a>
            {/each}
        </div>
        <ResumeSection SectionName="Skills">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus turpis in eu mi bibendum. Nunc sed velit dignissim sodales ut eu sem integer vitae. Eu consequat ac felis donec et odio. Adipiscing enim eu turpis egestas pretium aenean.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum dui faucibus in. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper.
            </p>
        </ResumeSection>
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