<script lang="ts">
    import ResumeEntry from "../../components/ResumeEntry.svelte";
    import ResumeSection from "../../components/ResumeSection.svelte";

    let Companies = [
        {
        Name:"Microsoft",
        Description:"Software Engineer II",
        Timeframe:"03/2020 - Current",
        href:"https://www.microsoft.com",
        Duties: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Donec et odio pellentesque diam volutpat commodo sed.",
            "Porta non pulvinar neque laoreet suspendisse interdum.",
            "Rutrum quisque non tellus orci ac.",
            "Sed vulputate odio ut enim blandit volutpat.",
            "Consectetur adipiscing elit ut aliquam.",
            "Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel.",
            "Arcu dui vivamus arcu felis bibendum ut."

        ]
        },
        {
        Name:"Northrop Grumman",
        Description:"Software Engineer",
        Timeframe:"07/2018 - 03/2020",
        href:"https://www.northropgrumman.com",
        Duties: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula.",
            "Rhoncus urna neque viverra justo nec.",
            "Nunc sed id semper risus in.",
            "Magna fermentum iaculis eu non diam phasellus vestibulum lorem."

        ]
        },
    ];

    let Schools = [
        {
            Name: "Ohio State University",
            Description: "Bachelor's of Science in Mechanical Engineering",
            TimeRanges: "08/2013 - 05/2018",
            href: "https://osu.edu",
            Duties: []
        },
        {
            Name: "Georgia Tech University",
            Description: "Master's of Science in Computer Science",
            TimeRanges: "08/2013 - 05/2018",
            href: "https://gatech.edu",
            Duties: []
        }
    ];

    let ContactLinks = [
        { href:"https://github.com/clay26", name:"GitHub" },
        { href:"/", name:"Website" },
        { href:"mailto:contact@clayjackson.dev", name:"E-Mail" }
    ];
</script>

<div class="flex justify-center my-8">
    <div class="flex flex-col flex-grow max-w-3xl gap-3 text-lg">
        <div class="font-extrabold text-gray-700 text-3xl border-b-2 border-slate-300 py-4">
            <h1>Clay Jackson</h1>
        </div>
        <div class="flex flex-col gap-1">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend mi in. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Egestas congue quisque egestas diam in arcu. Lectus magna fringilla urna porttitor rhoncus dolor. Elit eget gravida cum sociis natoque penatibus.
            </p>
            {#each ContactLinks as {href, name}}
                <a {href}>{name}</a>
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