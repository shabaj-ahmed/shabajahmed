import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Link
          key={"photo-album"}
          href={`/Projects/photo-album`}
          className="group border rounded-lg overflow-hidden transform transition duration-200 hover:shadow-2xl hover:scale-[1.02]"
        >
          <div className="aspect-[3/2] w-full relative">
            <Image
              src="/projects/photo-album/photo-album.jpg"
              alt="Photo Album Application"
              fill
              className="object-cover rounded-t-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-1">
              Photo Album Application
            </h2>
            <p className="text-sm text-gray-500 mb-1">2025-05-14</p>
            <p className="text-sm text-gray-700">
              A lightweight desktop application for tagging and retrieving
              personal photos.
            </p>
          </div>
        </Link>
        <Link
          key={"SAR-for-habit-formation"}
          href={`/Projects/SAR-for-habit-formation`}
          className="group border rounded-lg overflow-hidden transform transition duration-200 hover:shadow-2xl hover:scale-[1.02]"
        >
          <div className="aspect-[3/2] w-full relative">
            <Image
              src="/projects/SAR-for-habit-formation/SAR-for-habit-formation.jpg"
              alt="Socially Assistive Robot for Habit Formation"
              fill
              className="object-cover rounded-t-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-1">
              Socially Assistive Robot for Habit Formation
            </h2>
            <p className="text-sm text-gray-500 mb-1">2023-10-01</p>
            <p className="text-sm text-gray-700">
              This project focuses on using socially assistive robots to support
              habit formation in health and wellbeing.
            </p>
          </div>
        </Link>
        <Link
          key={"progressable"}
          href={`/Projects/progressable`}
          className="group border rounded-lg overflow-hidden transform transition duration-200 hover:shadow-2xl hover:scale-[1.02]"
        >
          <div className="aspect-[3/2] w-full relative">
            <Image
              src="/projects/progressable/logo.jpg"
              alt="Two Wheel Self-Balancing Robot"
              fill
              className="object-cover rounded-t-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-1">
              Progressable: A Exercise Journaling App
            </h2>
            <p className="text-sm text-gray-500 mb-1">2023-01-24</p>
            <p className="text-sm text-gray-700">
              Progressable is a exercise journaling app that allows users to
              monitor their workout performance to ensure consistent progress.
            </p>
          </div>
        </Link>
        <Link
          key={"balancing-robot"}
          href={`/Projects/balancing-robot`}
          className="group border rounded-lg overflow-hidden transform transition duration-200 hover:shadow-2xl hover:scale-[1.02]"
        >
          <div className="aspect-[3/2] w-full relative">
            <Image
              src="/projects/two_wheel_balancing_robot.jpg"
              alt="Two Wheel Self-Balancing Robot"
              fill
              className="object-cover rounded-t-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-1">
              Two Wheel Self-Balancing Robo
            </h2>
            <p className="text-sm text-gray-500 mb-1">2019-08-14</p>
            <p className="text-sm text-gray-700">
              This instructable will go through the design and build process for
              a self-balancing robot.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
