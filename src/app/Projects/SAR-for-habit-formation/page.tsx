import Image from "next/image";

export default function BalancingRobotPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-2">
        Socially Assistive Robot for Habit Formation
      </h1>
      <p className="text-sm text-gray-500 mb-8">2019-08-14</p>

      <div className="flex justify-center my-6">
        <Image
          src="/projects/SAR-for-habit-formation/SAR-for-habit-formation.jpg"
          width={500}
          height={500}
          alt="Two wheel balancing robot"
          className="rounded shadow-md"
        />
      </div>
      <p className="text-sm italic text-center mb-8">
        Figure 1: Showing how participants were requested to position the
        hardware.
      </p>

      <p className="mb-4 text-gray-800">
        This project explores how social robots can support long-term behaviour
        change in health contexts. Developed during my PhD, it investigates
        whether daily interactions with a socially assistive robot (SAR) can
        help users form healthy habits. The full codebase and documentation are
        available below.
      </p>

      <div className="mt-10 border-t pt-6 text-center">
        <p className="mb-2 text-lg text-gray-700 font-semibold">
          Explore the Full Project
        </p>
        <a
          href="https://github.com/shabaj-ahmed/SAR_for_habit_formation"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          View the complete project on GitHub
        </a>
      </div>

      <h3 className="text-2xl font-semibold mb-3 mt-8">Project Overview</h3>
      <p className="mb-4 text-gray-800">
        This research examines the psychological and behavioural effects of
        interacting with a SAR for three weeks and how SARs can encourage
        positive behaviour changes through habit formation, in an ecologically
        valid setting. The study is structured around:
      </p>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li>
          A daily check-in that is based on motivational interviewing principles
          and uses decision tree driven dialogue.
        </li>
        <li>
          A microservice architecture that ensures scalability and modularity.
        </li>
        <li>
          A state-driven control system using finite state machines (FSM) and
          behaviour trees.
        </li>
        ∏
      </ul>

      <h3 className="text-2xl font-semibold mb-3 mt-8">Interaction design</h3>
      <p className="mb-4 text-gray-800">
        During the three-week study, participants interact with the SAR twice
        daily. These interactions were designed to reinforce behaviour through
        repetition and reflection:
      </p>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li>
          <strong>Morning Reminder</strong>: The robot provides a brief
          motivational prompt based on the participant&apos;s implementation
          intention.
        </li>
        <li>
          <strong>Evening Check-In</strong>: A 3&ndash;5 minute structured
          dialogue based on motivational interviewing principles to track
          progress, address challenges, and encourage reflection. A decision
          tree controls the conversational flow, adapting questions based on
          responses.
        </li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4 mt-10">
        Study Design and Experimental Conditions
      </h2>
      <p className="mb-4 text-gray-800">
        This study employed a three-week between-subjects design to explore the
        role of socially assistive robots (SARs) in habit formation, comparing
        two conditions: robot-assisted and screen-only. Participants chose an
        exercise-related behaviour to develop into a habit and performed it in
        response to a daily cue defined through implementation intentions.
        Participants were fully informed that the technology aimed to influence
        their behaviour. The primary variable of interest was the SAR's presence
        and its influence on habit formation.
      </p>
      <p className="mb-4 text-gray-800">
        In this study, the robot was not there to guide a participant through
        the process of performing a behaviour, nor was it there to cue a
        behaviour. Instead, the robot was present to provide a consistent
        reminder and self-reflection to participants to perform the behaviour,
        and the physical embodiment enabled the participant to feel like they
        were having a conversation with a social agent whose expressivity would
        adjust based on the responses that the participant provided.
      </p>
      <p className="mb-4 text-gray-800">
        Participants were randomly assigned to one of two conditions:
      </p>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li>
          <strong>Robot-assisted Condition:</strong> Participants interacted
          daily with the SAR for reminders and check-ins. The robot provided
          embodied social interaction through emotional expressivity,
          conversational engagement, and motivational interviewing techniques.
        </li>
        <li>
          <strong>Screen-only Condition:</strong> Participants interacted daily
          with an identical dialogue and reminder structure presented through a
          digital interface without physical embodiment. This condition served
          as a comparison to isolate the effect of physical embodiment provided
          by the SAR.
        </li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4 mt-10">Study Procedure</h2>
      <p className="mb-4 text-gray-800">
        Figure 2 illustrates the overall study procedure. All participants
        followed the same initial steps but diverged during the study period
        into either the robot-assisted or screen-only condition before
        converging again for the post-study questionnaire and interview.
      </p>
      <p className="mb-4 text-gray-800">The study comprised four phases:</p>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li>
          <strong>Study qualification:</strong> To ensure participants met the
          study requirements.
        </li>
        <li>
          <strong>Priming and set up:</strong> Introductory session,
          establishing implementation intentions, and training participants on
          their assigned interaction method (robot or screen).
        </li>
        <li>
          <strong>Study period:</strong> 21-day period with minimal external
          interference except necessary communication and system
          troubleshooting.
        </li>
        <li>
          <strong>Post study:</strong> Final questionnaires and interviews
          assessing the experience, perceptions, and effectiveness of the
          intervention.
        </li>
      </ul>

      <div className="flex justify-center my-6">
        <Image
          src="/projects/SAR-for-habit-formation/experiment_procedure.png"
          width={300}
          height={300}
          alt="Study Procedure Diagram"
          className="rounded shadow-md"
        />
      </div>
      <p className="text-sm italic text-center mb-8">
        Figure 2: Visual representation of the study procedure. Participants
        completed onboarding and priming sessions before being randomly assigned
        to either the robot-assisted or screen-only condition for the 21-day
        study period. The two conditions converged again for the final
        post-study interview and questionnaires.
      </p>

      <h2 className="text-3xl font-semibold mb-4 mt-10">
        Software Architecture
      </h2>
      <p className="mb-4 text-gray-800">
        This project adopts a microservice architecture, where each service is
        designed to be stateless, storing its configuration and runtime state in
        a centralised database. Inter-service communication is handled using the
        Message Queuing Telemetry Transport (MQTT) protocol, which acts as a
        lightweight message broker supporting event-driven data exchange.
        <br />
        Figure 3 presents an overview of the system architecture, including all
        active services and the MQTT topics used for communication. This diagram
        serves to illustrate how loosely coupled services interact to create a
        cohesive robot behaviour control system.
      </p>
      <div className="flex justify-center my-6">
        <Image
          src="/projects/SAR-for-habit-formation/system_architecture.png"
          width={500}
          height={500}
          alt="System Architecture"
          className="rounded shadow-md"
        />
      </div>
      <p className="mb-4 text-gray-800 text-sm italic text-center">
        Figure 3: Overview of the system architecture showing all stateless
        services and the MQTT messages exchanged between them. Each service
        communicates through specific topics to maintain a modular and loosely
        coupled system.
      </p>

      <h2 className="text-3xl font-semibold mb-4 mt-10">
        Hybrid State Machine Architecture
      </h2>
      <p className="mb-4 text-gray-800">
        An event-driven communication model is employed to ensure the robot
        responds dynamically to internal and external events. A centralised
        control system governs the robot&apos;s behaviour, implemented as a
        hybrid state machine that combines reactive and deliberative components:
      </p>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li>
          <strong>Reactive layer</strong>: Uses a subsumption architecture to
          handle critical events (e.g., emergency stops) with priority-based
          arbitration.
        </li>
        <li>
          <strong>Deliberative layer</strong>: A Finite State Machine (FSM)
          controls state activation based on high-level goals, and a Behaviour
          Tree structures more complex behaviours while remaining responsive to
          new events.
        </li>
      </ul>
      <p className="mb-4 text-gray-800">
        This event-based architecture provides a clear separation between
        reactive and deliberative actions while ensuring near real-time
        responsiveness. Figure 4 illustrates the FSM used in the deliberative
        layer, showing its two high-level states: <i>active</i> and <i>error</i>
        , and the sub-states that can only be entered from the active state.
      </p>
      <div className="flex justify-center my-6">
        <Image
          src="/projects/SAR-for-habit-formation/FSM_states.png"
          width={500}
          height={500}
          alt="Finite State Machine diagram"
          className="rounded shadow-md"
        />
      </div>
      <p className="mb-4 text-gray-800 text-sm italic text-center">
        Figure 4: Hierarchy of states within the finite state machine (FSM). The
        system transitions between two high-level states: <em>active</em> and{" "}
        <em>error</em>. From the <em>active</em> state, it can enter sub-states
        such as <em>interacting</em>, <em>configuring</em>, and{" "}
        <em>reminding</em>.
      </p>

      <h3 className="text-2xl font-semibold mb-3 mt-8">
        Advantages of This Approach
      </h3>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li>
          <strong>Centralised Decision Making</strong>: The state machines act
          as a central point for decision-making, ensuring that the robot&apos;s
          state is always considered before any action is taken, preventing
          conflicts.
        </li>
        <li>
          <strong>Consistency in Behaviour</strong>: Ensures predictable and
          logical interactions. For every state transition, there is a cleanup
          and setup procedure to manage the transitions safely.
        </li>
        <li>
          <strong>Stateless</strong>: All service states and configurations are
          stored in a centralised SQL database, ensuring fault tolerance.
        </li>
        <li>
          <strong>Scalability</strong>: New states and complex behaviours are
          easier to add and manage.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mb-3 mt-8">Stateless Services</h3>
      <p className="mb-4 text-gray-800">
        All services are stateless, and the state is stored in the centralised
        database. This ensures:
      </p>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li>
          <strong>Resilience</strong>: Services can recover from failures
          without losing critical state.
        </li>
        <li>
          <strong>Consistency</strong>: The robot can resume interactions
          without losing context.
        </li>
        <li>
          <strong>Modularity</strong>: Independent services can be maintained
          and updated efficiently.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mb-3 mt-8">Communication</h3>
      <p className="mb-4 text-gray-800">
        MQTT facilitates service-to-service communication. The messaging
        patterns used in this project were:
      </p>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li>
          <strong>Request-Response</strong>: Wait for a response before
          proceeding, e.g., service commands.
        </li>
        <li>
          <strong>Fire and Forget</strong>: Send a message without waiting for
          an acknowledgement, e.g., service heartbeat.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mb-3 mt-8">Communication Flow</h3>
      <p className="mb-4 text-gray-800">
        Within individual services, a custom event dispatcher facilitates
        decoupled communication between the business logic and communication
        scripts. This dispatcher maintains a dictionary of event handlers keyed
        by unique event_name identifiers, where the value is the function to be
        called. Event and associated payload are dispatched synchronously to the
        registered handler function, ensuring predictable first-in-first-out
        (FIFO) message handling. This approach separates the core business logic
        from the messaging layer, providing flexibility to modify the underlying
        message broker with minimal code refactoring.
      </p>
      <p className="mb-4 text-gray-800">
        Additionally, Python event queues were used to communicate between state
        machines. These queues were used to request state transitions. The
        communication flow is as follows:
      </p>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li>
          The FSM subscribes to two event queues: one from the subsumption state
          machine (SS), which publishes priority-based reactive commands, and
          one from the behaviour tree (BT), which issues user-driven or
          goal-oriented events.
        </li>
        <li>
          The behaviour tree (BT) subscribes to a single queue from the FSM,
          receiving instructions that guide the execution of structured
          behaviours.
        </li>
        <li>
          FSM listens to incoming events or transition requests from both the SS
          and BT, processes them in priority order, and issues state transition
          commands to the BT.
        </li>
      </ul>
      <p className="mb-4 text-gray-800">
        An illustration of this communication hierarchy and flow between the
        state machine layers is depicted in Figure 5.
      </p>
      <div className="flex justify-center my-6">
        <Image
          src="/projects/SAR-for-habit-formation/state_machine_communication.png"
          width={300}
          height={300}
          alt="State Machine Communication Flow"
          className="rounded shadow-md"
        />
      </div>
      <p className="mb-4 text-gray-800 text-sm italic text-center">
        Figure 5: Illustration of the communication flow between the subsumption
        state machine (SS), finite state machine (FSM), and behaviour tree (BT).
        The FSM subscribes to queues from both SS and BT and manages state
        transitions accordingly. The BT subscribes only to the FSM to receive
        high-level behaviour commands.
      </p>

      <h2 className="text-3xl font-semibold mb-4 mt-10">User Interface</h2>
      <p className="mb-4 text-gray-800">
        A screen-based user interface was included to increase transparency
        around the data being collected (DR9) and to provide participants with
        an additional modality for interacting with the robot beyond voice
        dialogue. The user interface was implemented as a Web App using Flask
        and consisted of four main pages: Home, Check-In, History, and Settings.
        Each screen was designed to support a specific function, such as
        initiating interactions, tracking progress, or adjusting configuration
        settings. The interface also provided real-time feedback on the
        robot&apos;s current state and offered users insight into the data being
        processed.
      </p>

      <h3 className="text-2xl font-semibold mb-3 mt-8">Home</h3>
      <p className="mb-4 text-gray-800">
        Displays the participant&apos;s implementation intention, along with the
        time of the next scheduled reminder and the number of days remaining in
        the study (Figure 6.A). To access other screens, participants could
        click the “Open” button located at the top left corner, which revealed a
        menu for navigation (Figure 6.B).
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <Image
          src="/projects/SAR-for-habit-formation/home.png"
          width={600}
          height={400}
          alt="Home Screen"
          className="rounded shadow-md"
        />
        <Image
          src="/projects/SAR-for-habit-formation/menu.png"
          width={600}
          height={400}
          alt="Menu Screen"
          className="rounded shadow-md"
        />
      </div>
      <p className="text-center text-sm italic mb-8">
        Figure 6.A: Home Screen. &nbsp;&nbsp; Figure 6.B: Menu Screen.
      </p>

      <h3 className="text-2xl font-semibold mb-3 mt-8">Check-In</h3>
      <p className="mb-4 text-gray-800">
        To start a check-in, a user must first navigate to the check-in page. A
        green “Start Check-In” button initiated the dialogue (Figure 7.A). The
        check-in interface resembled a messaging application, displaying both
        the robot&apos;s questions and the participant&apos;s previous responses
        in a scrollable chat-like format (Figure 7.B). This design helped
        participants stay oriented during the conversation and review what had
        already been discussed. Upon completion, participants could choose to
        save or redo their responses. If no action was taken within 20 seconds,
        the check-in was saved automatically.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <Image
          src="/projects/SAR-for-habit-formation/check_in.png"
          width={600}
          height={400}
          alt="Check-in Screen"
          className="rounded shadow-md"
        />
        <Image
          src="/projects/SAR-for-habit-formation/conversation_history.png"
          width={600}
          height={400}
          alt="Conversation History"
          className="rounded shadow-md"
        />
      </div>
      <p className="text-center text-sm italic mb-8">
        Figure 7.A: Check-in screen. &nbsp;&nbsp; Figure 7.B: Conversation
        history.
      </p>

      <h3 className="text-2xl font-semibold mb-3 mt-8">History</h3>
      <p className="mb-4 text-gray-800">
        The history page allowed participants to view their check-in activity
        over time. This screen displays the days on which the participant had
        completed a check-in, providing an overview of adherence to the
        intervention and the data collected (Figure 8).
      </p>
      <div className="flex justify-center my-6">
        <Image
          src="/projects/SAR-for-habit-formation/history.png"
          width={500}
          height={400}
          alt="History Screen"
          className="rounded shadow-md"
        />
      </div>
      <p className="text-sm italic text-center mb-8">
        Figure 8: History screen.
      </p>

      <h3 className="text-2xl font-semibold mb-3 mt-8">Settings</h3>
      <p>
        The settings page provided controls for modifying aspects of the study
        configurations. This included options for adjusting the reminder time
        (Figure 9.A), robot eye colour, robot volume and touchscreen brightness
        (Figure 9.B).
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <Image
          src="/projects/SAR-for-habit-formation/settings.jpg"
          width={600}
          height={400}
          alt="Settings Screen - Reminder"
          className="rounded shadow-md"
        />
        <Image
          src="/projects/SAR-for-habit-formation/settings_screen_robot_customsiation.png"
          width={600}
          height={400}
          alt="Settings Screen - Robot Customisation"
          className="rounded shadow-md"
        />
      </div>
      <p className="text-center text-sm italic mb-8">
        Figure 9.A: Settings screen - reminder. &nbsp;&nbsp; Figure 9.B:
        Settings screen - robot customisation.
      </p>

      <h3 className="text-2xl font-semibold mb-3 mt-8">Error Handling</h3>
      <p className="mb-4 text-gray-800">
        Given the long-term nature of the study, robust error management was
        essential. In the event of a fatal error, an error screen was displayed
        to inform the participant of the issue. This screen included a
        description of the error to support debugging and maintain system
        transparency (Figure 10).
      </p>
      <div className="flex justify-center my-6">
        <Image
          src="/projects/SAR-for-habit-formation/connection_error.png"
          width={500}
          height={400}
          alt="Error Screen"
          className="rounded shadow-md"
        />
      </div>
      <p className="text-sm italic text-center mb-8">
        Figure 10: Connection error message.
      </p>

      <h2 className="text-3xl font-semibold mb-4 mt-10">User Requirements</h2>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li>
          <strong>Adaptive coaching strategy</strong>: Dynamic coaching based on
          ongoing analysis of feedback.
        </li>
        <li>
          <strong>Professional boundaries</strong>: Avoid psychological
          counselling; focus on behaviour change.
        </li>
        <li>
          <strong>Provide reminders and cues</strong>: Timely auditory/visual
          prompts for key tasks.
        </li>
        <li>
          <strong>Track progress and provide feedback</strong>: Monitor goal
          adherence and progress.
        </li>
        <li>
          <strong>Motivate and encourage</strong>: Adaptive motivational
          messaging.
        </li>
        <li>
          <strong>Make the process fun and engaging</strong>: Use gamification
          to increase adherence.
        </li>
        <li>
          <strong>Availability and accessibility</strong>: Proactive, engaging,
          and widely accessible robot.
        </li>
        <li>
          <strong>Support for autonomy and personal growth</strong>: Allow
          user-driven goal-setting and planning.
        </li>
        <li>
          <strong>Ethical data handling</strong>: Secure, lawful storage and
          handling of personal data.
        </li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4 mt-10">Hardware Selection</h2>
      <p className="mb-4 text-gray-800">
        To support autonomous, real-world deployment in participants' homes, the
        system was built using off-the-shelf components for reliable performance
        and consistent operation over a 21-day study period. The setup consisted
        of the following six main components: a Vector 2.0 robot, a Raspberry Pi
        5, a portable 4G Wi-Fi router, an external USB microphone, an external
        USB speaker, and a 5-inch touchscreen LCD. Figure 11 illustrates the
        component integration, with Figure 1 showing how participants where
        requested to position the hardware.
      </p>
      <div className="flex justify-center my-6">
        <Image
          src="/projects/SAR-for-habit-formation/hardware_setup.png"
          width={600}
          height={400}
          alt="Hardware Setup"
          className="rounded shadow-md"
        />
      </div>
      <p className="text-sm italic text-center mb-8">
        Figure 11: Hardware setup used for in-home deployment of the SAR system.
        The Raspberry Pi 5 served as the central controller, connected to a
        touchscreen (via the DSI connector), an external USB microphone, an
        external USB speaker, Vector Robot and a portable 4G Wi-Fi router, which
        established a local network for communicating with the Vector robot. All
        peripherals were powered via the Raspberry Pi's USB ports, and the
        system operated from a single USB-C 5A power supply.
      </p>

      <div className="mt-10 border-t pt-6 text-center">
        <p className="mb-2 text-lg text-gray-700 font-semibold">
          Explore the Full Project
        </p>
        <a
          href="https://github.com/shabaj-ahmed/SAR_for_habit_formation"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          View the complete project on GitHub
        </a>
      </div>
    </div>
  );
}
