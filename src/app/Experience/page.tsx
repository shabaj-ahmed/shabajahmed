import Link from 'next/link';

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      
      <section className="p-6 rounded-md shadow-md bg-white">
        <h1 className="text-3xl font-bold mb-4">💼 Professional Experience</h1>
        
        <h2 className="text-xl font-bold ml-4">Co-Founder</h2>
        <p className="italic">3D Farms &#8211; Feb 2019 to Feb 2020</p>
        <p className="mt-2">
          As a co-founder of an early&#8211;stage vertical farming startup, part of the <strong>Fit4Start accelerator program</strong>, our mission was to develop innovative indoor farming solutions to tackle global food scarcity. I led <strong>project delivery</strong> across both <strong>hardware and software</strong>, ensuring that all systems met our performance and efficiency goals.
        </p>
        <p className="mt-4">
          A personal highlight was developing an <strong>autonomous embedded nutrient control system</strong> using <strong>C/C++</strong>, enabling plant growth optimisation. Our team&apos;s dedication resulted in the successful launch of a prototype <strong>aeroponics-based vertical farm</strong> designed to minimise complexity and reduce initial capital costs compared to competitors.
        </p>

        <h2 className="text-xl font-bold mt-6 ml-4">ADAS System Architect</h2>
        <p className="italic">Jaguar Land Rover &#8211; Oct 2017 to Feb 2019</p>
        <p className="mt-2">
          At Jaguar Land Rover, I worked as an <strong>ADAS System Architect</strong>, where I was responsible for the design and development of Advanced Driver Assistance Systems (ADAS) using <strong>Model-Based Systems Engineering (MBSE)</strong>. I utilised the <strong>IBM Rational toolchain</strong>, including <strong>Rhapsody, DOORS, and RTC</strong>, to define system architectures that integrated <strong>hardware and software</strong> components while accommodating complex and evolving functional requirements. My work emphasised <strong>modularity and flexibility</strong>, enabling future updates with minimal disruption to the overall system. 
        </p>
        <p className="mt-4">
          A significant part of my role involved managing over <strong>10,000 automotive signals</strong> across <strong>multi-network architectures</strong>. By rationalising and streamlining the signal definitions, I worked to reduce redundancy, ensure full requirement traceability, and improve overall system efficiency. To further support development and validation processes, I automated documentation workflows using <strong>VBA scripts</strong> alongside <strong>IBM Rhapsody</strong> and <strong>DOORS</strong>. This automation improved traceability, shortened review cycles, and enhanced alignment across internal stakeholders and external suppliers.
        </p>
        <p className="mt-4">
          In addition to technical responsibilities, I played a key role in defining a <strong>formal MBSE process</strong> for the ADAS division. I created <strong>internal documentation and training materials</strong> to support the adoption of model-based methodologies, ensuring consistency and scalability across engineering teams. This initiative helped embed <strong>systems thinking</strong> and <strong>robust engineering practices</strong> into the ADAS development pipeline.
        </p>

        <h2 className="text-xl font-bold mt-6 ml-4">Software Engineer Intern</h2>
        <p className="italic">Wiresmith Technology &#8211; Jul 2017 to Sep 2017</p>
        <p className="mt-2">
          Wiresmith Technology was a niche software engineering firm specialising in <strong>National Instruments-based measurement and control systems</strong>. They supported clients with embedded applications by developing <strong>custom LabVIEW and LabVIEW FPGA solutions</strong>, reducing risk and speeding up the deployment of new technologies.
        </p>
        <p className="mt-4">
          As a Software Engineer, I created <strong>reusable software libraries</strong> to enhance project delivery, system scalability, and maintainability. I worked independently to improve my LabVIEW proficiency while contributing to active development projects. Working within an agile framework, I used Git for version control and implemented object-oriented design and developer testing practices to ensure code quality and reusability.
        </p>
      </section>

      <section className="p-6 rounded-md shadow-md bg-white">
        <h1 className="text-3xl font-bold mb-4">📚 Education</h1>

        <h2 className="text-xl font-bold ml-4">PhD in Human-Robot Interaction</h2>
        <p className="italic">University of Bristol &#8211; Awarded 2025</p>
        <p className="mt-2">
          My doctoral research focuses on how socially assistive robots can influence human behaviour, with a particular emphasis on promoting long-term healthy habits. I design and conduct empirical studies using both qualitative and quantitative methods, including statistical analysis. A key focus of my work is developing interactive robotic systems that support users through habit formation, using Python-based systems and decision trees to enable personalised dialogue and behaviour tracking.
        </p>

        <h2 className="text-xl font-bold mt-6 ml-4">MEng in Mechanical Engineering</h2>
        <p className="italic">Cardiff University &#8211; Graduated with First Class Honours</p>
        <p className="mt-2">
          I specialised in mechatronics and control systems, where I discovered a strong interest in embedded systems and robotics. As part of the university&apos;s Formula Student team, I developed a bespoke clutch-by-wire system using LabVIEW, enabling automated gear changes and improved launch precision. This innovation played a role in Cardiff becoming the first UK university to win the international competition.
        </p>
        <p className="mt-4">
          I also led a successful final-year team project, where we built and tested an autonomous search-and-rescue drone that achieved the highest overall mark in the module.
        </p>
      </section>

      <section className="p-6 rounded-md shadow-md bg-white">
        <h1 className="text-3xl font-bold mb-4">🏆 Projects and Achievements</h1>

        <h2 className="text-xl font-bold ml-4"> <Link href={{ pathname: 'https://github.com/shabaj-ahmed/SAR_for_habit_formation', }}> Habit-Forming Social Robot (PhD Research) 🔗 </Link> </h2>
        <p className="mt-2">
          Designed and developed a socially assistive robot to support users in forming daily physical activity habits. The robot engaged users through structured dialogue, personalised encouragement, and reflective feedback, using a <strong>microservice architecture</strong> and <strong>MQTT-based communication</strong>. This system was evaluated in a <strong>long-term study</strong> comparing robot-assisted and screen-only conditions, with promising results in user engagement and habit adherence.
        </p>

        <h2 className="text-xl font-bold mt-6 ml-4"><Link href={{ pathname: 'https://github.com/shabaj-ahmed/progressable', }}> Progressable &#8211; Exercise Journaling App 🔗 </Link></h2>
        <p className="mt-2">
          Built Progressable, a cross-platform mobile app developed using <strong>Flutter</strong> and <strong>Firebase</strong>. Progressable is an exercise journaling mobile application. It allows athletes to build custom workouts and track exercise-related metrics such as <strong>reps, sets, duration, and exercise intensity</strong>. Allowing athletes to compete with their previous best and continue pushing for progress. Having a balanced and well-planned workout routine based on the individual&apos;s physiology can accelerate progress and reduce the likelihood of injury.
        </p>

        <h2 className="text-xl font-bold mt-6 ml-4"><Link href={{ pathname: 'https://github.com/shabaj-ahmed/bris_hack_2024', }}> BrisHacks Hackathon 2024 Winner 🔗 </Link></h2>
        <p className="mt-2">
          Made a webcam-based exercise game for children to play during a rainy day in school. The game was designed to be lightweight and deployable on a <strong>Raspberry Pi</strong>. The game was similar to Dino Run, which is presented when Google Chrome loses internet connection. In the game, players must jump and duck when an obstacle approaches. Pose recognition was done with <strong>MediaPipe</strong>. The Game was designed such that one script was the controller that published body poses to an <strong>MQTT broker</strong>, and the game ran on a separate script that subscribed to specific controller topics. In this way, we were able to develop different games without worrying about having to duplicate controller code. As a result, to demonstrate scalability, we also created a game that is similar to Flappy Birds, but instead of jumping and ducking, players would squat to variable depths to get the bird to fly through the gap.
        </p>

        <h2 className="text-xl font-bold mt-6 ml-4">Robotic + Care Hackathon 2023 Winner</h2>
        <p className="mt-2">
          Developed a social care robot to aid in healthcare settings. The robot was designed to assist with medication reminders, health monitoring, and companionship. The robot featured <strong>tactile sensors</strong> capable of detecting and responding affectionately to interactions such as petting or hugging, offering emotional comfort and companionship. Additional capabilities included integrated <strong>face tracking</strong>, allowing the robot to maintain eye contact during <strong>speech-based interaction</strong>, creating a more personal connection. The robot was further enhanced with <strong>conversational AI</strong> functionality powered by ChatGPT, enabling engaging dialogues, and an <strong>emergency-calling feature enabled through Twilio</strong> to provide critical support when required.
        </p>

        <h2 className="text-xl font-bold mt-6 ml-4">Formula Student &#8211; Clutch-by-Wire System (Cardiff Racing)</h2>
        <p className="mt-2">
          Formula Student is an international competition where university teams design, build, and race a single-seat formula-style car from scratch each year. As part of Cardiff Racing&apos;s <strong>sensors, data acquisition, and electrics division</strong>, I contributed to the design and development of embedded systems for vehicle control.
        </p>
        <p className="mt-4">
          My most significant contribution was the creation of Cardiff Racing&apos;s <strong>first clutch-by-wire system</strong>, replacing the traditional foot pedal with steering wheel-mounted paddles. This system was developed to solve a recurring issue with the legacy design, where the steel cable in the foot-actuated clutch frequently failed under load. Additionally, the limited space in the cockpit made it difficult to accommodate three pedals comfortably, and drivers often pressed the clutch accidentally during gear changes, which compromised driver safety and performance.
        </p>
        <p className="mt-4">
          The new system used a <strong>servo motor</strong> to provide precise clutch control and a <strong>reversible bistable solenoid</strong> to actuate the sequential gearbox. I developed the control logic using <strong>LabVIEW</strong> and deployed it on a <strong>myRIO embedded controller</strong>, which interfaced with the car&apos;s ECU. When the driver requested a gear change, the myRIO sent an upshift or downshift signal to the ECU. If the engine revs were within a safe range, the ECU then triggered the solenoid to complete the shift — ensuring both mechanical safety and smooth transitions during high-performance driving.
        </p>
        <p className="mt-4">
          My responsibilities included LabVIEW programming, ECU interfacing, designing mechanical components in <strong>SolidWorks</strong> validated through <strong>Finite Element Analysis (FEA)</strong>, building and testing custom electrical circuits, performing <strong>Failure Mode and Effects Analysis (FMEA)</strong> to ensure safety, and collaborating in weekly team meetings alongside writing detailed technical documentation.
        </p>
        <p className="mt-4">
          The system operated flawlessly during testing and competition and contributed significantly to <strong>Cardiff Racing becoming the first UK team to win the international Formula Student competition.</strong> This experience deepened my understanding of embedded control systems, electromechanical design, and the importance of reliability and safety in high-performance environments.
        </p>
      </section>
    </div>
  );
}
