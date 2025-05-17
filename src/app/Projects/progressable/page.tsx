import Image from "next/image";

export default function Progressable() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-center my-6">
        <Image
          src="/projects/progressable/feature_graphic.png"
          width={500}
          height={500}
          alt="Progressable Feature Graphic"
          className="rounded shadow-md"
        />
      </div>

      <p className="text-sm text-gray-500 mb-8">2023-01-24</p>

      <p className="mb-4 text-gray-800">
        Progressable was originally developed for startup pitch competitions and
        later launched as a mobile application on both the App Store and Google
        Play. Designed specifically for athletes, the app supported exercise
        journaling, workout tracking, and goal setting to help users monitor
        progress over time.
      </p>
      <p className="mb-4 text-gray-800">
        The app remained live for almost three years before being removed in
        February 2025 due to limited market viability, the project remains a
        strong example of full-cycle product development, from concept and
        design to deployment and user testing. Built using{" "}
        <strong>Flutter</strong> and <strong>Firebase</strong>, the codebase is
        available on{" "}
        <a
          href="https://github.com/shabaj-ahmed/progressable"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          GitHub
        </a>
        . Below is the original business plan submitted as part of the startup
        competition, outlining Progressable&apos;s value proposition, target
        market, and go-to-market strategy.
      </p>

      <div className="mt-10 border-t pt-6 text-center">
        <p className="mb-2 text-lg text-gray-700 font-semibold">
          Explore the Full Project
        </p>
        <a
          href="https://github.com/shabaj-ahmed/progressable"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          View the complete project on GitHub
        </a>
      </div>

      <h3 className="text-2xl font-semibold mb-3 mt-8">Executive Summary</h3>
      <p className="mb-4 text-gray-800">
        Exercise journaling is an essential aspect of an athlete&apos;s health
        and fitness journey. Allowing them to plan, actualise, and comprehend
        their goals. A journal is a way to think through the process of becoming
        faster, stronger, or more skilled over time by providing a clear
        measurement towards completing a goal. It is difficult for an athlete to
        improve without knowing what they are currently capable of. As a result,
        journaling can add a multiplier to an athlete&apos;s fitness growth,
        leading to better and more predictable progress.
      </p>
      <p className="mb-4 text-gray-800">
        Progressable is a mobile application for exercise journaling. It enables
        athletes to create custom workout routines and track exercise-related
        metrics such as reps, sets, weight lifted, exercise duration, or
        calories burned. It then uses historical data of the athlete&apos;s
        performance to populate targets to hit for their current workout. This
        allows athletes to compete with their previous best performance and
        continue pushing for progress. This approach ensures that workouts
        constantly evolve with the user, helping them break through plateaus and
        continuously strive for improvement. Additionally, suppose an exercise
        can&apos;t be performed due to equipment shortage or a change in desire
        to perform the exercise. In that case, athletes can substitute the
        exercise for another during the current workout, ensuring their workout
        remains uninterrupted and effective even during peak gym hours.
      </p>
      <div className="flex justify-center my-6">
        <Image
          src="/projects/progressable/banner_image.jpg"
          width={500}
          height={500}
          alt="Progressable Feature Graphic"
          className="rounded shadow-md"
        />
      </div>
      <p className="mb-4 text-gray-800">
        With a primary target market of athletes aged 18-35 engaged in
        powerlifting, weightlifting, and bodybuilding, Progressable taps into a
        Total Addressable Market (TAM) of 115 million gym members across Europe
        and the United States, with a Serviceable Addressable Market (SAM) of
        16.1 million who visit the gym every day. We aim to capture 5% of the
        SAM in 5 years, which gives us a Serviceable Obtainable Market (SOM) of
        805,000 customers.
      </p>
      <p className="mb-4 text-gray-800">
        Our current marketing efforts focus on user engagement and retention
        through face-to-face interactions and targeted campaigns for experienced
        athletes. Progressable is evolving with user feedback and ongoing
        testing of new features to ensure continuous value delivery. Our goal is
        to become an essential part of users' training regimens. In year 3, we
        plan to experiment with paid social media marketing, reinvesting profits
        into sales and marketing to amplify our reach and impact.
      </p>
      <p className="mb-4 text-gray-800">
        Finance projections were made to calculate minimum funding requirements.
        Based on this lean start-up approach, the minimum funding necessary to
        sustain the business until it becomes profitable is £10,000. Any
        additional funding received will be funnelled into product development
        and marketing efforts to ensure that the business meets its growth rate
        targets.
      </p>
      <p className="mb-4 text-gray-800">
        Progressable aims to revolutionise the fitness journey of athletes
        around the globe by providing an innovative mobile platform for exercise
        journaling and personalised workout management. We envision a world
        where athletes at all levels can effortlessly track, analyse, and
        enhance their performance, turning ambitious fitness goals into
        achievable milestones. Through continuous innovation and user-focused
        design, our goal is to become the indispensable tool for athletes
        seeking to maximise their physical potential, maintain peak health, and
        transform their training experiences with data-driven insights and
        expert guidance.
      </p>

      <h2 className="text-2xl font-semibold mb-3 mt-8">About the team</h2>
      <p className="mb-4 text-gray-800">
        Progressable is actively looking for other team members that share the
        same vision to join our team. At present, the management
        responsibilities are handled by the individual founder. In the future,
        management responsibilities will be shared between several executive
        board members, each of whom will manage a department where their
        experience is most beneficial to the growth of the company.
      </p>

      <h2 className="text-2xl font-semibold mb-3 mt-8">Market</h2>
      <p className="mb-4 text-gray-800">
        Progressable is a mobile application designed specifically for
        experienced strength and conditioning athletes to help them keep track
        of their weight training and cardiovascular conditioning workout
        performances. Our app stands out from other fitness apps by offering a
        streamlined, user-focused experience. We provide robust functionality
        for creating and logging workouts without any unnecessary clutter or
        features that are often present in mass-market applications.
      </p>
      <h3 className="text-xl font-semibold mb-3 mt-8">
        Market size evaluation
      </h3>
      <p className="mb-4 text-gray-800">
        Our primary target audience is athletes aged 18 to 35 who participate in
        powerlifting, weightlifting, and bodybuilding, a demographic known for
        its dedication to fitness and a propensity to invest in tools that
        enhance training outcomes. The reason for starting with weight training
        is because workout performance is objective, i.e., weight lifted, reps,
        sets and rest time are quantifiable. The age bracket was chosen as this
        is the competitive age range of athletes.
      </p>
      <p className="mb-4 text-gray-800">
        We calculated our TAM based on the number of people that have gym
        memberships across Europe and the United States , which was
        approximately 115 million people. According to consensus data , 14% of
        these people go to the gym almost every day, which makes our SAM 16.1
        million people. From this, we intend to capture 5% of the market share
        by the end of 5 years, which will equate to 805,000.
      </p>
      <table className="min-w-full table-auto border border-gray-200">
        <tbody>
          <tr className="border-b border-gray-100">
            <td className="px-4 py-3 font-medium text-gray-700">
              TAM (Total gym memberships across Europe and the US)
            </td>
            <td className="px-4 py-3 text-right text-gray-900 font-bold">
              115,000,000
            </td>
          </tr>
          <tr className="border-b border-gray-100">
            <td className="px-4 py-3 font-medium text-gray-700">
              SAM (14% of TAM attend the gym every day)
            </td>
            <td className="px-4 py-3 text-right text-gray-900 font-bold">
              16,100,000
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-medium text-gray-700">
              SOM (Assume we capture 5% of this market in 5 years)
            </td>
            <td className="px-4 py-3 text-right text-gray-900 font-bold">
              805,000
            </td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-2xl font-semibold mb-3 mt-8">Competition</h2>
      <p className="mb-4 text-gray-800">
        The current method of tracking workouts predominantly consists of using
        a notepad and pen. However, this method of tracking is not consistent;
        it is difficult to keep track of exercises from one workout to the next,
        and unless duplicated to a spreadsheet, it does not give granular
        details of temporal changes in performance. Progressable has been set up
        to provide athletes with the tools they need to reduce their cognitive
        load and focus on reaching peak physical performance as efficiently as
        possible.
      </p>
      <p className="mb-4 text-gray-800">
        Additionally, there are a lot of fitness apps that are trying to capture
        a portion of the health and or exercise tracking market. The ones that
        are most related to Progressable are detailed in Table 1. We have also
        conducted a SWOT analysis (see Table 2) of our market and competitors to
        identify the internal and external factors that can affect our business.
        This helped us determine how we can position ourselves to provide the
        maximum value to our customers.
      </p>
      <table className="min-w-full table-auto border border-gray-300 text-center">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">Features</th>
            <th className="px-4 py-2">Progressable</th>
            <th className="px-4 py-2">Strong</th>
            <th className="px-4 py-2">Everlog</th>
            <th className="px-4 py-2">FitBod</th>
            <th className="px-4 py-2">Aptive</th>
          </tr>
        </thead>
        <caption className="text-sm text-gray-500 mt-2">
          Table 1 Competitor analysis of the mobile apps most closely related to
          Progressable.
        </caption>
        <tbody>
          {/* Row 1 */}
          <tr>
            <td className="text-left px-4 py-2 bg-white">
              Build custom workouts
            </td>
            <td className="bg-green-100 font-bold">✅</td>
            <td className="bg-green-100 font-bold">✅</td>
            <td className="bg-red-100 font-bold">❌</td>
            <td className="bg-red-100 font-bold">❌</td>
            <td className="bg-red-100 font-bold">❌</td>
          </tr>
          {/* Row 2 */}
          <tr>
            <td className="text-left px-4 py-2 bg-white">
              Select which metrics to track
            </td>
            <td className="bg-green-100 font-bold">✅</td>
            <td className="bg-red-100 font-bold">❌</td>
            <td className="bg-red-100 font-bold">❌</td>
            <td className="bg-red-100 font-bold">❌</td>
            <td className="bg-red-100 font-bold">❌</td>
          </tr>
          {/* Row 3 */}
          <tr>
            <td className="text-left px-4 py-2 bg-white">
              Available on iOS & Android
            </td>
            <td className="bg-green-100 font-bold">✅</td>
            <td className="bg-green-100 font-bold">✅</td>
            <td className="bg-red-100 font-bold">❌</td>
            <td className="bg-green-100 font-bold">✅</td>
            <td className="bg-green-100 font-bold">✅</td>
          </tr>
          {/* Row 4 */}
          <tr>
            <td className="text-left px-4 py-2 bg-white">
              Designed for athletes
            </td>
            <td className="bg-green-100 font-bold">✅</td>
            <td className="bg-red-100 font-bold">❌</td>
            <td className="bg-red-100 font-bold">❌</td>
            <td className="bg-red-100 font-bold">❌</td>
            <td className="bg-red-100 font-bold">❌</td>
          </tr>
        </tbody>
      </table>
      <br />
      <p className="text-sm text-gray-500 text-center mt-4">
        Table 2. SWAT analysis of the competitor to Progressable
      </p>
      <div className="grid grid-cols-2 gap-6">
        {/* Strengths */}
        <div>
          <div className="bg-gray-700 text-white px-4 py-2 font-bold rounded-t-md">
            Strengths
          </div>
          <ul className="border border-gray-200 p-4 rounded-b-md space-y-2">
            <li>
              <span className="font-semibold">• Customised Workouts:</span>{" "}
              Tailored workout programs that cater specifically to individual
              athlete requirements.
            </li>
            <li>
              <span className="font-semibold">• Athlete-Centric Design:</span>{" "}
              Progressable is explicitly developed with the athlete's needs in
              mind, ensuring that functionalities support their goals
              effectively.
            </li>
          </ul>
        </div>

        {/* Weaknesses */}
        <div>
          <div className="bg-gray-700 text-white px-4 py-2 font-bold rounded-t-md">
            Weaknesses
          </div>
          <ul className="border border-gray-200 p-4 rounded-b-md space-y-2">
            <li>
              <span className="font-semibold">
                • Market Penetration Challenges:
              </span>{" "}
              Gaining visibility and traction within the niche market of serious
              athletes can be challenging.
            </li>
            <li>
              <span className="font-semibold">• Late Market Entry:</span> Not
              having the first mover advantage combined with potential
              scepticism due to users' previous poor experiences with similar
              apps.
            </li>
          </ul>
        </div>

        {/* Opportunities */}
        <div>
          <div className="bg-gray-700 text-white px-4 py-2 font-bold rounded-t-md">
            Opportunities
          </div>
          <ul className="border border-gray-200 p-4 rounded-b-md space-y-2">
            <li>
              <span className="font-semibold">
                • Untapped Market for Athletes:
              </span>{" "}
              There is a significant gap in the market for apps that cater
              specifically to athletes.
            </li>
            <li>
              <span className="font-semibold">
                • Demand for Data Utilisation:
              </span>{" "}
              Current apps collect data but fail to guide users on how to use
              this information to optimise their performance. Progressable can
              fill this gap by offering actionable insights and performance
              improvement tips.
            </li>
          </ul>
        </div>

        {/* Threats */}
        <div>
          <div className="bg-gray-700 text-white px-4 py-2 font-bold rounded-t-md">
            Threats
          </div>
          <ul className="border border-gray-200 p-4 rounded-b-md space-y-2">
            <li>
              <span className="font-semibold">
                • High Entry Barriers in the Mobile App Market:
              </span>{" "}
              Success heavily depends on creating strong user impressions and
              high-quality UI/UX designs.
            </li>
            <li>
              <span className="font-semibold">• User Retention:</span> Retaining
              users in a competitive fitness app market requires constant
              innovation and responsiveness to feedback, as users can quickly
              switch to competitors if dissatisfied. Put off by poor UI/UX.
            </li>
          </ul>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mb-3 mt-8">Market need</h2>
      <p className="mb-4 text-gray-800">
        The app is not there to do the heavy lifting. Instead, it is there to
        show an athlete how to utilise their time and effort most effectively.
        Our mission is to provide a user-friendly exercise journaling solution
        that enhances the fitness journey for weightlifters across the spectrum,
        from the novice to the seasoned athlete. By focusing on the specific
        needs and challenges of our target market, we are not just offering an
        app but a path to achieving their most ambitious fitness goals.
      </p>
      <h3 className="text-xl font-semibold mb-3 mt-8">Progression</h3>
      <p className="mb-4 text-gray-800">
        For anyone who is training to improve their physical fitness, knowing
        what their body is capable of and how hard they need to push themselves
        is a vital metric in accelerating progress. This ensures that they do
        not overwork their body, which can lead to injury or underwork their
        body, leading to slower performance gains. Our app generates targets for
        athletes to achieve based on their previous performance during their
        last workout. It eliminates the guesswork in workout planning and
        progression tracking, ensuring that every session in the gym is
        purposeful and builds upon the last. This targeted approach accelerates
        progress and significantly reduces the risk of injury due to
        overtraining. Moreover, if an exercise is not possible due to a lack of
        equipment or a change in preference, athletes can easily substitute it
        for another one during the current workout.
      </p>
      <h3 className="text-xl font-semibold mb-3 mt-8">Recovery</h3>
      <p className="mb-4 text-gray-800">
        Every individual responds differently to training. With consistent data
        logging, athletes can understand how training is affecting their
        performance and allow them to take pre-emptive action to preserve their
        health and longevity. With the additional data, the athlete can make
        sport-specific training adjustments to get targeted performance
        improvements. For example, suppose an athlete is seeing a slow and
        continual decrease in performance. In that case, it may indicate that
        they are overworking their body and, therefore, not recovering fast
        enough. As a result, they may choose to take time off or reduce workout
        volume to allow their body to heal.
      </p>
      <h3 className="text-xl font-semibold mb-3 mt-8">Unique selling point</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {/* Column 1 */}
        <div>
          <div className="w-full h-72 relative mb-4">
            <Image
              src="/projects/progressable/custom_workouts.jpg"
              alt="Custom Workout"
              fill
              className="object-contain"
            />
          </div>
          <p className="font-semibold">Build custom workouts</p>
          <p className="text-sm text-gray-600">
            Create, update and rearrange exercises to suit you.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <div className="w-full h-72 relative mb-4">
            <Image
              src="/projects/progressable/substitute_workouts.jpg"
              alt="Substitute Workouts"
              fill
              className="object-contain"
            />
          </div>
          <p className="font-semibold">Substitute workouts</p>
          <p className="text-sm text-gray-600">
            Easily swap exercises when preferred equipment isn&apos;t available.
          </p>
        </div>

        {/* Column 3 */}
        <div>
          <div className="w-full h-72 relative mb-4">
            <Image
              src="/projects/progressable/exercise_notes.jpg"
              alt="Workout Notes"
              fill
              className="object-contain"
            />
          </div>
          <p className="font-semibold">Workout and exercise level notes</p>
          <p className="text-sm text-gray-600">
            Add specific notes to exercises to track tips or modifications.
          </p>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mb-3 mt-8">User Persona</h2>
      <p className="mb-4 text-gray-800">
        Take Suhil, a 32-year-old primary school teacher and passionate
        weightlifter. Suhil represents our ideal user, a dedicated individual
        balancing a demanding career and growing family with ambitious fitness
        goals. Progressable offers Suhil an efficient, intuitive tool to
        optimise his training sessions, ensuring that every workout is
        purposeful and builds upon the previous one. This systematic tracking
        helps Suhil prepare for upcoming competitions and manage his training
        intensity, reducing the risk of injury and enhancing performance gains.
      </p>
      <h2 className="text-2xl font-semibold mb-3 mt-8">
        Short-term Goals (Next 12 Months)
      </h2>
      <p className="mb-4 text-gray-800">
        Over the next year, our primary focus will be to deeply understand our
        users&rsquo; needs and refine our app&apos;s functionality to serve them
        better. We aim to conduct comprehensive market research and gather
        feedback from at least 100 current users, supplemented by in-depth
        interviews with 50 users and personal trainers. This approach will
        ensure we&apos;re not just guessing but are precisely tailoring our app
        based on direct user insights.
      </p>
      <p className="mb-4 text-gray-800">
        This feedback will guide the integration of biometric data collection
        features, such as heart rate and breathing rate, directly into our app.
        Our target is to successfully launch these features and see a 20%
        increase in user engagement with the new functionalities. Achieving this
        will solidify our transition towards a more coaching-centric model,
        enhancing the overall user experience and laying the groundwork for
        future expansions.
      </p>
      <h2 className="text-2xl font-semibold mb-3 mt-8">
        Mid-term Goals (Next 24 Months)
      </h2>
      <p className="mb-4 text-gray-800">
        By the end of the second year, we aim to officially launch our coaching
        platform within the app. This platform will revolutionise how users
        connect with personal trainers, making it as simple as a few taps on
        their screen. We aim to onboard at least 100 personal trainers and match
        them with users, targeting a 25% increase in user subscriptions
        attributed to this new feature. The personal trainers/coaches will be
        recruited through targeted outreach within the fitness industry,
        ensuring we bring on board professionals who are as dedicated to our
        users&rsquo; fitness goals as we are. The launch of this coaching
        platform signifies our commitment to tracking fitness and actively
        contributing to our users&rsquo; progress.
      </p>
      <h2 className="text-2xl font-semibold mb-3 mt-8">
        Long-term Goals (Next 36 Months)
      </h2>
      <p className="mb-4 text-gray-800">
        Looking towards the next three years, our vision expands to scaling and
        optimising the coaching platform to support an increased user base and
        enhance the precision of our matching algorithms. We aim to double the
        number of active users and coaches, improving the matching accuracy by
        40%. This will involve significant technological upgrades and algorithm
        improvements, which we hope to achieve with our expanding team.
      </p>
      <p className="mb-4 text-gray-800">
        We will also develop and integrate advanced digital twin technology,
        aiming for a 30% improvement in personalising workouts and predicting
        user performance. This initiative will place us at the forefront of
        personalised fitness technology.
      </p>
      <p className="mb-4 text-gray-800">
        By the end of this year, we plan to hire sales and marketing team
        members to facilitate our global expansion. Our goal is to launch in at
        least three new countries and increase our user base by 50% in these
        markets. These steps will solidify our app's position as a leader in the
        fitness industry and significantly enhance our global impact on health
        and fitness.
      </p>

      <h2 className="text-2xl font-semibold mb-3 mt-8">
        Business Operations and Strategy
      </h2>
      <h3 className="text-xl font-semibold mb-3 mt-8">Business Management</h3>
      <p className="mb-4 text-gray-800">
        At the moment, there is only one co-founder who oversees Progressable's
        business operations. However, the company is actively searching for
        individuals who share the same passion and vision for health and fitness
        to join as founding members.
      </p>
      <h3 className="text-xl font-semibold mb-3 mt-8">
        Future revenue streams
      </h3>
      <p className="mb-4 text-gray-800">
        Progressable aims to expand its product range in the future by
        diversifying its offerings. Initially, we will offer self-tracking and
        self-coaching services, and then we plan to move forward with hiring
        external coaches to train clients online. We will use a revenue-sharing
        scheme to hire coaches.
      </p>
      <h3 className="text-xl font-semibold mb-3 mt-8">Tracking (Phase 1)</h3>
      <p className="mb-4 text-gray-800">
        Progressable is designed and targeted at athletes. For these customers,
        we are offering the convenience of building their custom workouts and
        tracking the metrics that are important to them while providing them
        with the analytics that are important to ensure progress and reduce
        injury risk. We will generate revenue from these customers from our
        subscription model.
      </p>
      <h3 className="text-xl font-semibold mb-3 mt-8">Hardware (Phase 2)</h3>
      <p className="mb-4 text-gray-800">
        In the future, we hope to expand our product offering by incorporating
        other hardware into our app. This hardware will include biometric
        sensors like heart rate, breathing rate and body temperature, as well as
        sensors that measure workout intensity, such as bar speed sensors and
        power meters.
      </p>
      <p className="mb-4 text-gray-800">
        There is a possibility of spinning off a hardware division to provide
        athletes and coaches with the tools they need to assess training
        performance and ensure that the athletes are progressing towards their
        goals safely and efficiently. This may include developing velocity,
        impact, or wearable sensors, depending on the adoption of the hardware
        integration feature. Revenue will be generated through product sales.
      </p>
      <h3 className="text-xl font-semibold mb-3 mt-8">Coaching (Phase 3)</h3>
      <p className="mb-4 text-gray-800">
        Our long-term goal is to create a platform for athletes to hire an
        online coach to review their workouts and tailor their training towards
        helping them achieve their athletic ambitions. We will generate revenue
        from this service through a revenue-sharing scheme.
      </p>
      <h2 className="text-2xl font-semibold mb-3 mt-8"> Marketing Strategy</h2>
      <p className="mb-4 text-gray-800">
        Our current marketing efforts are primarily focused on building a strong
        foundation of user engagement and retention. To achieve this:
      </p>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li>
          We prioritise face-to-face interactions with our audience, which serve
          as a valuable source of insights and feedback. These insights are
          instrumental in refining and tailoring our platform to better meet the
          needs and expectations of our users.
        </li>
        <li>
          Subject to available funding, we plan to broaden our engagement
          strategies through targeted social media campaigns, webinars,
          seminars, workshops, and meetup events, all specifically designed for
          our target demographic of experienced athletes.
        </li>
        <li>
          At the heart of our strategy is the commitment to continuous
          improvement and evolution, guided by direct user feedback. This
          ensures that we keep pace with the evolving needs of our athletes,
          making the app an essential tool in their training regimens. We will
          maintain this commitment by ongoing alpha and beta testing of new
          features, which will help keep our users engaged and ensure they find
          ongoing value in their subscriptions.
        </li>
      </ul>
      <h3 className="text-xl font-semibold mb-3 mt-8">
        {" "}
        Market penetration and growth
      </h3>
      <p className="mb-4 text-gray-800">
        Looking ahead to the third year, we plan to explore opportunities in
        paid marketing. As our business grows and becomes more profitable, we
        will reinvest a greater portion of our profits back into our sales and
        marketing initiatives. This strategic reinvestment is aimed at
        amplifying our reach and impact, ensuring the sustained growth and
        success of Progressable in serving the athletic community.
      </p>
      <p className="mb-4 text-gray-800">
        By aligning our marketing strategies with the specific needs of athletes
        and continuously adapting to their feedback, Progressable aims to become
        an indispensable part of their training regimen. Our commitment to
        quality, community, and constant improvement will drive the sustained
        growth and success of our brand in the competitive fitness app market.
      </p>
      <h2 className="text-2xl font-semibold mb-3 mt-8">Financial strategy</h2>
      <p className="mb-4 text-gray-800">
        Financial forecasting has been done based on the current product
        offering of a tracking application targeted at athletes.
      </p>
      <h3 className="text-xl font-semibold mb-3 mt-8">Business model</h3>
      <p className="mb-4 text-gray-800">
        Progressable will be a freemium-based product with ads. On the freemium
        plan, users are limited by the number of workouts, exercises, and
        substitute exercises they can add. Limits in the app are unlocked with a
        subscription to a monthly or annual plan.
      </p>
      <p className="mb-4 text-gray-800">
        There are three different types of in-app purchases available, the
        prices of which were chosen based on comparative analysis with our
        competitors:
      </p>
      <ol className="mb-4 pl-5 list-decimal marker:text-gray-500 space-y-1 pl-6">
        <li className="ml-0">
          Premium non-consumable purchase will remove all ads for the lifetime
          of the app £12.99
        </li>
        <li className="ml-0">
          Monthly auto&ndash;renewable subscriptions remove ads and all the
          limits across the application £9.99
        </li>
        <li className="ml-0">
          Annual auto&ndash;renewable subscriptions remove ads and all the
          limits across the application £99.99
        </li>
      </ol>
      <h3 className="text-xl font-semibold mb-3 mt-8">Financial Forecast</h3>
      <p className="mb-4 text-gray-800">
        Our target is to acquire 805,000 customers by the end of year 5 (refer
        to the Market size evaluation section), with a monthly compounding
        growth rate of 23%. This growth rate presents itself as an exponential
        curve, with the majority of growth taking place in years 4 and 5. We
        have confidence in the unique value proposition of Progressable and the
        increasing demand for specialised fitness tools. We believe that we can
        capture the 805,000 customers we are targeting. A detailed breakdown of
        the financial forecast is provided in Table 2 with a break even analysis
        provided in Figure 2.
      </p>
      <h3 className="text-xl font-semibold mb-3 mt-8">Financial Strategy</h3>
      <p className="mb-4 text-gray-800">
        The financial plan has been devised to identify the minimum amount of
        funding required. This means that until Progressable becomes profitable,
        operational costs are minimised, and no salaries are paid. Initial funds
        will concentrate on critical areas of product development for the first
        two years.
      </p>
      <p className="mb-4 text-gray-800">
        In the third year, we plan to initiate paid marketing strategies,
        including social media advertising, to enhance user acquisition and
        retention. Additionally, we will start compensating our executive team
        with minimum wage and move operations into a coworking space to foster a
        collaborative working environment.
      </p>
      <h3 className="text-xl font-semibold mb-3 mt-8">
        Investment in Human Resources
      </h3>
      <p className="mb-4 text-gray-800">
        In year four, we hope to start expanding our team by hiring developers
        and marketers to accelerate our growth and expand our product offering.
      </p>
      <h3 className="text-xl font-semibold mb-3 mt-8">
        Platform fee and retention (churn)
      </h3>
      <p className="mb-4 text-gray-800">
        The platform fees are 30% across both Google and Apple for the first
        year a user subscribes to our app, reducing to 15% thereafter. Our
        financial models assume each user will engage with our service for one
        year, contributing to our LTV calculations £99.99x70%=£69.99. This model
        will be adjusted based on actual user retention patterns and
        subscription renewals observed post-launch.
      </p>
      <h3 className="text-xl font-semibold mb-3 mt-8">
        Expenses and projections
      </h3>
      <p className="mb-4 text-gray-800">
        To ensure financial sustainability, expenses for each year were adjusted
        to achieve a healthy 3:1 ratio of Customer Lifetime Value (LTV) to
        Customer Acquisition Cost (CAC), as outlined in Table 3. Please refer to
        Table 2 for a detailed breakdown of expenses. Sustainable growth is
        anticipated by year three, which means funding requirements are
        necessary to support activities in the first two years.
      </p>
      <table className="min-w-full table-auto border border-gray-300 text-center">
        <thead>
          <tr className="bg-gray-700 text-white">
            <th className="px-4 py-2"></th>
            <th className="px-4 py-2">Year 1</th>
            <th className="px-4 py-2">Year 2</th>
            <th className="px-4 py-2">Year 3</th>
            <th className="px-4 py-2">Year 4</th>
            <th className="px-4 py-2">Year 5</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="text-left font-medium px-4 py-2">
              Customer Acquisition Cost
            </td>
            <td className="px-4 py-2">£230.27</td>
            <td className="px-4 py-2">£32.81</td>
            <td className="px-4 py-2">£14.62</td>
            <td className="px-4 py-2">£5.24</td>
            <td className="px-4 py-2">£0.45</td>
          </tr>
          <tr className="border-t">
            <td className="text-left font-medium px-4 py-2">
              LTV/CAC target &lt; 25%
            </td>
            <td className="px-4 py-2 bg-red-100 text-red-700 font-bold">
              328.99%
            </td>
            <td className="px-4 py-2 bg-red-100 text-red-700 font-bold">
              46.88%
            </td>
            <td className="px-4 py-2">20.88%</td>
            <td className="px-4 py-2">7.49%</td>
            <td className="px-4 py-2">0.65%</td>
          </tr>
        </tbody>
      </table>
      <h3 className="text-xl font-semibold mb-3 mt-8">Funding Requirements</h3>
      <p className="mb-4 text-gray-800">
        Taking this very lean approach to the start-up, our cashflow estimates
        show a deficit of £8,079.23. Adding 25% for contingency brings the total
        minimum funding requirement to approximately £10,000. This funding will
        exclusively be used to support critical product development for the
        first two years.
      </p>
      <h3 className="text-xl font-semibold mb-3 mt-8">Risks</h3>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li>
          {" "}
          <strong>Aggressive Growth Targets:</strong>: Our financial forecast is
          dependent on achieving a 23% monthly compounding growth rate, leading
          to 805,000 customers by the end of year 5. This growth is ambitious
          and may be difficult to sustain, especially without significant brand
          recognition. To mitigate this risk, we will implement a phased growth
          strategy. The initial focus will be on building a strong user base by
          leveraging niche marketing and community-building strategies. We plan
          to adjust our marketing spend based on early performance indicators
          and user feedback, allowing us to refine our approach continuously.
        </li>
        <li>
          <strong>Dependency on subscription model:</strong>Our revenue model is
          dependent on subscriptions, and the high platform fees (30%) could
          erode profit margins. We will be experimenting with diversifying our
          revenue streams to decrease our dependence on a single income source.
        </li>
        <li>
          <strong>Market penetration and competition:</strong> The fitness app
          market is competitive, with many established players. Penetrating this
          market as a late entrant could be challenging. Progressable aims to
          differentiate itself by focusing on experienced athletes and providing
          more advanced, customisable features than competitors. We can look at
          partnerships with Gyms and other fitness professionals to increase our
          market penetration and credibility.
        </li>
        <li>
          <strong>Financial sustainability:</strong> Assuming all new customers
          will maintain their subscriptions for a full year might not align with
          actual customer behaviour, impacting our financial projections.
          Regularly reviewing customer usage and retention data will allow us to
          adjust our business model in real-time. Implementing a robust
          analytics framework will enable us to understand user behaviour better
          and adapt our strategies accordingly.
        </li>
      </ul>
      <p className="text-sm text-gray-500 text-center mt-4">
        Table 4 These expense calculations are used to generate the profit and
        loss, cash flow and break-even analysis.
      </p>
      <div className="flex justify-center">
        <Image
          src="/projects/progressable/financial_calculations.png"
          width={500}
          height={500}
          alt="Progressable financial calculations"
          className="rounded shadow-md"
        />
      </div>
      <div className="flex justify-center my-6">
        <Image
          src="/projects/progressable/break_even.png"
          width={500}
          height={500}
          alt="Progressable break even analysis"
          className="rounded shadow-md"
        />
      </div>
      <p className="text-sm text-gray-500 text-center">
        Figure 2 Break-even analysis showing that Progressable will break even
        in August of year three (~31 months)
      </p>
    </div>
  );
}
