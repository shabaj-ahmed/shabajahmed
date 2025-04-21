import Image from 'next/image'

export default function BalancingRobotPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-2">Two Wheel Self-Balancing Robot</h1>
      <p className="text-sm text-gray-500 mb-8">2019-08-14</p>

      <div className="flex justify-center my-6">
        <Image
          src="/projects/two_wheel_balancing_robot.jpg"
          width={500}
          height={500}
          alt="Two wheel balancing robot"
          className="rounded shadow-md"
        />
      </div>
      
      <p className="mb-4 text-gray-800">
        This instructable will go through the design and build process for a self-balancing robot.
        <br/>
        As a note, I just want to say that self-balancing robots are not a new concept and they have been built and documented by others. I want to use this opportunity to share with you my interpretation of this robot.
      </p>

      <h3 className="text-2xl font-semibold mb-3 mt-8">
        What is a self-balancing robot?
      </h3>
      <p className="mb-4 text-gray-800">
        A self-balancing robot is a system that uses inertial measurement data, gathered from an onboard sensor, to continuously adjust its position to keep upright.
      </p>

      <h3 className="text-2xl font-semibold mb-3 mt-8">
        How does it work?
      </h3>
      <p className="mb-4 text-gray-800">
        A simple analogy to consider is an inverted pendulum, where the centre of mass is above the pivot point. However, in our case, we are restricting the pendulum to one degree of freedom by having one axis of rotation—the axis of the two wheels.
      </p>
      <p className="mb-4 text-gray-800">
        Since any disturbance will cause the robot to fall, we need a method of actively keeping it balanced. This is where our closed-loop algorithm (PID controller) comes into play. Knowing which direction our robot is falling, we can adjust the direction of rotation of our motors to keep the system balanced.
      </p>

      <h3 className="text-2xl font-semibold mb-3 mt-8">
        How does the closed-loop algorithm work?
      </h3>
      <p className="mb-4 text-gray-800">
        The basic principle is: if the robot is falling forward, it will compensate by moving forward to catch itself; if falling backward, it will move backward.
      </p>

      <p className="mb-4 text-gray-800">
        So, we need to do two things:
      </p>
      <ol className="mb-4 pl-5 list-decimal marker:text-gray-500 space-y-1 pl-6">
        <li className="ml-0">
          Calculate the angle of inclination (Roll).
        </li>
        <li className="ml-0">
          Control the motor direction accordingly.
        </li>
      </ol>

      <h3 className="text-2xl font-semibold mb-3 mt-8">
        How will we measure the angle of inclination?
      </h3>
      <p className="mb-4 text-gray-800">
        We'll use an <strong>Inertial Measurement Unit (IMU)</strong>, specifically the <strong>MPU-6050</strong>, which includes:
      </p>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li className="ml-0">
          <strong>Accelerometer</strong>: measures proper acceleration.
        </li>
        <li className="ml-0">
          <strong>Gyroscope</strong>: measures angular velocity.
        </li>
      </ul>

      <p className="mb-4 text-gray-800">
        <strong>Sensor drawbacks:</strong>
      </p>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li className="ml-0">
          The <strong>accelerometer</strong> is noisy but consistent over time.
        </li>
        <li className="ml-0">
          The <strong>gyroscope</strong> drifts over time but is initially accurate.
        </li>
      </ul>

      <p className="mb-4 text-gray-800">
        For this instructable, we&apos;ll use the onboard <strong>Digital Motion Processing (DMP)</strong> of the MPU-6050. Others may use a complementary filter—either works.
      </p>

      <h3 className="text-2xl font-semibold mb-3 mt-8">
      Supplies
      </h3>
      <p className="mb-4 text-gray-800">
       <strong>Parts:</strong>
      </p>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li className="ml-0">
          Arduino Pro Mini 3.3V 8MHz (ATmega328)
        </li>
        <li className="ml-0">
          FT232RL USB to TTL Serial Adapter (3.3V–5.5V)
        </li>
        <li className="ml-0">
          GY-521 module with MPU-6050
        </li>
        <li className="ml-0">
          2x N20 Micro Gear Motors (6V, 300rpm)
        </li>
        <li className="ml-0">
          L298N Motor Driver
        </li>
        <li className="ml-0">
          LM2596S DC to DC Buck Converter
        </li>
        <li className="ml-0">
          9.7V Li-ion Rechargeable Battery Pack
        </li>
        <li className="ml-0">
          Battery Strap
        </li>
        <li className="ml-0">
          2x Prototyping PCB Boards
        </li>
        <li className="ml-0">
          Male &amp; Female Header Pins
        </li>
        <li className="ml-0">
          Jumper Wires
        </li>
      </ul>

      <p className="mb-4 text-gray-800">
      <strong>
        Tools:
      </strong>
      </p>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li className="ml-0">
          Soldering Iron &amp; Solder
        </li>
        <li className="ml-0">
          Nylon Hex Spacer Standoff
        </li>
        <li className="ml-0">
          Precision Screwdriver Set
        </li>
        <li className="ml-0">
          3D Printer
        </li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4 mt-10">
        Step 1: Construction
      </h2>
      <p className="mb-4 text-gray-800">
        I 3D printed the chassis and used standoffs to assemble the robot, which consists of <strong>4 layers</strong>:
      </p>
      <ol className="mb-4 pl-5 list-decimal marker:text-gray-500 space-y-1 pl-6">
        <li className="ml-0">
          <strong>
          Bottom Layer
          </strong>
          : Mounts motors and L298N motor driver.
        </li>
        <li className="ml-0">
          <strong>
          Second Layer
          </strong>
          : Holds the prototype board with Arduino and headers.
        </li>
        <li className="ml-0">
          <strong>
          Third Layer
          </strong>
          : Mounts the IMU.
        </li>
        <li className="ml-0">
          <strong>
          Top ("Bumper") Layer
          </strong>
          : Holds battery, buck converter, and switch.
        </li>
      </ol>

      <p className="mb-4 text-gray-800">
        <strong>Design Principle</strong>: Keep everything modular for easy replacement and reusability.
      </p>

      <p className="mb-4 text-gray-800">
        Download the STL files and code from <a className="text-blue-600 underline" href="https://github.com/shabaj-ahmed/Self_Balaning_Robot_Code/tree/master">GitHub</a>.
      </p>

      <h2 className="text-3xl font-semibold mb-4 mt-10">
        Step 2: Wiring
      </h2>
      <p className="mb-4 text-gray-800">
        I soldered female headers to the perf-board to match the Arduino. Then I soldered male headers for I/O access. Components were mounted to the 3D printed frame and connected via jumper wires.
      </p>

      <div className="flex justify-center my-6">
        <Image
          src="/projects/wiring_diagram_blanacing_robot.jpg"
          width={500}
          height={500}
          alt="Wiring Diagram"
          className="rounded shadow-md"
        />
      </div>

      <h2 className="text-3xl font-semibold mb-4 mt-10">
        Step 3: Control Theory
      </h2>
      <p className="mb-4 text-gray-800">
        To balance the robot, we use a <strong>PID controller</strong>:
      </p>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li className="ml-0">
          <strong>Proportional (P)</strong>: Output is proportional to error.
        </li>
        <li className="ml-0">
          <strong>Integral (I)</strong>: Accumulates error over time to reduce steady-state error.
        </li>
        <li className="ml-0">
          <strong>Derivative (D)</strong>: Predicts future error based on rate of change, reducing oscillation.
        </li>
      </ul>

      <p className="mb-4 text-gray-800">
        <strong>Algorithm Summary</strong>:
      </p>
      <ol className="mb-4 pl-5 list-decimal marker:text-gray-500 space-y-1 pl-6">
        <li className="ml-0">
          Calculate angle of inclination (error).
        </li>
        <li className="ml-0">
          Compute control signal:
          <code className="text-gray-800">
          P + I + D
          </code>
          .
        </li>
        <li className="ml-0">
          Send control signal to motors.
        </li>
        <li className="ml-0">
          Large error = fast motor response.
          <br/>
          Small error = slow motor adjustment.
        </li>
      </ol>

      <h2 className="text-3xl font-semibold mb-4 mt-10">
        Step 4: Using MPU-6050
      </h2>
      <h3 className="text-2xl font-semibold mb-3 mt-8">
        MPU6050 Library
      </h3>
      <p className="mb-4 text-gray-800">
        <a className="text-blue-600 underline" href="https://github.com/jrowberg/i2cdevlib/tree/master/Arduino/MPU6050">
          MPU6050 GitHub Library
        </a>
      </p>

      <h3 className="text-2xl font-semibold mb-3 mt-8">
        Calibrating Offsets
      </h3>
      <p className="mb-4 text-gray-800">
        Use this <a className="text-blue-600 underline" href="https://www.i2cdevlib.com/forums/topic/96-arduino-mpu6050-dmp-example-imu-data/"> calibration script </a> by Luis Rodenas to calculate and set offset values in <code className="text-gray-800">setup()</code>.
      </p>

      <h3 className="text-2xl font-semibold mb-3 mt-8">
        Digital Motion Processor (DMP)
      </h3>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li className="ml-0">
          <p className="mb-4 text-gray-800">
            <strong>What is DMP?</strong>
            <br/>
            An onboard processor that fuses motion data from the gyroscope and accelerometer.
          </p>
        </li>
        <li className="ml-0">
          <p className="mb-4 text-gray-800">
            <strong>How to use DMP?</strong>
            <br/>
            Use the example sketch:
            <br/>
            <code className="text-gray-800">File → Examples → MPU6050 → MPU6050_DMP6</code>
          </p>
        </li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4 mt-10">
        Step 5: Coding
      </h2>
      <p className="mb-4 text-gray-800">
        I used <strong>Arduino IDE</strong> and <strong>FTDI adapter</strong> to program the Arduino Pro Mini.
      </p>
      <p className="mb-4 text-gray-800">
        Base code: <code className="text-gray-800">MPU6050_DMP6</code> example sketch
        <br/>
        Additions: <code className="text-gray-800">PID()</code> and <code className="text-gray-800">MotorDriver()</code> functions
      </p>

      <h3 className="text-2xl font-semibold mb-3 mt-8">
        Required Libraries:
      </h3>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li className="ml-0">
          <code className="text-gray-800">Wire.h</code>
        </li>
        <li className="ml-0">
          <code className="text-gray-800">MPU6050</code>
        </li>
        <li className="ml-0">
          <code className="text-gray-800">I2Cdev.h</code>
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mb-3 mt-8">
        Pseudo Code
      </h3>
<pre className="bg-gray-100 text-sm p-4 rounded mb-6 overflow-auto whitespace-pre-wrap text-gray-800">
{`// Include Libraries
#include <Wire.h>
#include <I2Cdev.h>
#include <MPU6050.h>

// Initialise variables and objects

void setup() {
  // Set pinModes for motors and LED
  // Initialise MPU6050 and set offsets
}

void PID() {
  // Calculate PID output
}

void MotorDriver(float pid_output) {
  // Drive motors using PID result
}

void loop() {
  // Get data from DMP
  PID();
  MotorDriver();
}`}
</pre>

      <p className="mb-4 text-gray-800">
        The full source code is available on
        <a
          href="https://github.com/shabaj-ahmed/Self_Balaning_Robot_Code/blob/master/Self_Balaning_Robot_Code.ino"
          className="text-blue-600 underline"
        >
          GitHub
        </a>
      </p>

      <h2 className="text-3xl font-semibold mb-4 mt-10">
        Step 6: PID Tuning Procedure
      </h2>
      <ol className="mb-4 pl-5 list-decimal marker:text-gray-500 space-y-1 pl-6">
        <li className="ml-0">
          Set <strong>I</strong> and <strong>D</strong> to 0.
        </li>
        <li className="ml-0">
          Increase <strong>P</strong> until robot starts oscillating.
        </li>
        <li className="ml-0">
          Increase <strong>I</strong> to accelerate correction.
        </li>
        <li className="ml-0">
          Add <strong>D</strong> to reduce oscillations.
        </li>
      </ol>

      <p className="mb-4 text-gray-800">
        If tuning fails, start over with a new <strong>P</strong> value. Each system may need vastly different PID values.
      </p>

      <h2 className="text-3xl font-semibold mb-4 mt-10">
        Step 7: Conclusion
      </h2>
      <p className="mb-4 text-gray-800">
        The motors were <strong>too slow</strong> to respond to disturbances, and the system lacked <strong>inertia</strong>. As a result, the robot would lean and roll instead of balancing. The <strong>3D printed wheels</strong> lacked traction and would slip.
      </p>

      <h3 className="text-2xl font-semibold mb-3 mt-8">
        Suggestions for Improvement:
      </h3>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li className="ml-0">
          Use <strong>aster, higher-torque motors</strong>
        </li>
        <li className="ml-0">
          Add <strong>weight higher up</strong> (or use heavier batteries)
        </li>
        <li className="ml-0">
          Replace 3D-printed wheels with <strong>rubber ones</strong>for better traction
        </li>
      </ul>
    </div>
  );
}