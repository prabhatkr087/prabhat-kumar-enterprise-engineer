document.addEventListener("DOMContentLoaded", () => {

    /*
     * Terminal typing effect
     */

    const typingElements =
        document.querySelectorAll(".typing");


    typingElements.forEach((element) => {

        const originalText =
            element.textContent.trim();

        element.textContent = "";

        let index = 0;

        function typeCharacter() {

            if (index < originalText.length) {

                element.textContent +=
                    originalText.charAt(index);

                index++;

                setTimeout(
                    typeCharacter,
                    80
                );

            }

        }

        typeCharacter();

    });


    /*
     * Navigation active state
     */

    const sections =
        document.querySelectorAll("section");

    const navLinks =
        document.querySelectorAll("nav a");


    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop;

            if (
                window.scrollY >=
                sectionTop - 150
            ) {

                current =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach((link) => {

            link.style.color = "";

            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.style.color =
                    "#00ff66";

            }

        });

    });


    /*
     * Project card terminal effect
     */

    const projectCards =
        document.querySelectorAll(".project-card");


    projectCards.forEach((card) => {

        card.addEventListener(
            "mouseenter",
            () => {

                const command =
                    card.querySelector(
                        ".project-command"
                    );

                if (command) {

                    command.style.color =
                        "#00ff66";

                }

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                const command =
                    card.querySelector(
                        ".project-command"
                    );

                if (command) {

                    command.style.color =
                        "#557961";

                }

            }
        );

    });

});
