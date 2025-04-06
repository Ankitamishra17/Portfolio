import React from "react";

const About = () => {
    return(
        <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            
            <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center  w-full h-full">
                <div className="pb-8">
                    <p className =" text-4xl font-bold inline border-b-4 border-gray-500">
                        About me
                    </p>
                </div>

                <p className="text-xl mt-20 text-white">
                An inquisitive, enthusiastic Computer Science undergrad, skilled in Full Stack Development with a stronghold on Data Structures and Algorithms. Working towards leveraging solid development skills into building useful products and user experiences. Exploring and working my way up, one step at a time!

I love to read and write. In my free time you'll find me sitting at my terrace and putting down my thoughts in form of poetry. Or possibly, I'd be spotifying my night away! ;)
                </p>

                <br/>

                <p className="text-xl">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
                    deserunt illum mollitia officiis qui exercitationem perferendis neque
                    quasi a recusandae necessitatibus tempora iusto! Blanditiis error
                    iste, totam fugiat recusandae rerum laborum perferendis molestiae
                    aperiam asperiores nemo. Magni dolor maxime debitis vitae, eaque hic
                    ab mollitia voluptatibus, a nostrum eveniet laborum!  
                </p>
            </div>
        </div>
    )
}

export default About;