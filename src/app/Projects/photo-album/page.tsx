import Image from "next/image";

export default function PhotoAlbumPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-2">Photo Album Application</h1>

      <h2 className="text-3xl font-semibold mb-4 mt-10">Project Overview</h2>
      <p className="mb-4 text-gray-800">
        Over the years, I&apos;ve taken thousands of photos capturing special
        occasions, travels, and everyday moments. However, storing and
        retrieving these memories has become increasingly difficult. When I want
        to find a photo of a specific person, event, or location, I have no
        reliable way to search by these criteria. As a result, many meaningful
        moments are becoming harder to revisit simply because I can&apos;t
        locate the images when I want them.
      </p>
      <p className="mb-4 text-gray-800">
        This project set out to solve that problem by creating a lightweight
        desktop application that allows all my photos to be stored in a single,
        unstructured folder, while enabling meaningful organisation and
        retrieval through tagging.
      </p>
      <p className="mb-4 text-gray-800">
        The application allows me to tag each image with custom metadata such as
        the people present, the event, the location, and even the emotion it
        captures. With this functionality, I can easily filter images to find
        exactly what I&apos;m looking for — whether reminiscing about a trip or
        collecting all the photos of a specific family member.
      </p>
      <p className="mb-4 text-gray-800">
        The project prioritises simplicity, privacy, and offline use. It is not
        designed for cloud syncing or large-scale deployment, but rather as a
        personal tool for organising and enjoying memories.
      </p>

      <div className="mt-10 border-t pt-6 text-center">
        <p className="mb-2 text-lg text-gray-700 font-semibold">
          Explore the Full Project
        </p>
        <a
          href="https://github.com/shabaj-ahmed/photo_album"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          View the complete project on GitHub
        </a>
      </div>

      <h3 className="text-2xl font-semibold mb-3 mt-8">Key Features</h3>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li>Tag images with people, events, locations, emotions, and dates</li>
        <li>Search and filter using multiple tag combinations</li>
        <li>Detect and review duplicate images</li>
        <li>Perform batch tagging and image operations</li>
        <li>Offline use with no external dependencies</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4 mt-10">System Requirements</h2>
      <p className="mb-4 text-gray-800">
        This section outlines the design requirements for the photo album
        application, focusing on what users need from the system and how the
        system should behave. It is divided into three parts: user requirements
        that describe the goals from the user's perspective, functional
        requirements that specify what the system shall do, and non-functional
        requirements that define the quality attributes of the system.
      </p>

      <h3 className="text-2xl font-semibold mb-3 mt-8">
        User Requirements (UR)
      </h3>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li>
          <strong>UR1</strong>: As a user, I want to search my photo album to{" "}
          <strong>find memories of people or events quickly</strong>.
        </li>
        <li>
          <strong>UR2</strong>: As a user, I want to describe the content of my
          images so I can <strong>organise my album efficiently</strong>.
        </li>
        <li>
          <strong>UR3</strong>: As a user, I want to apply the same description
          to multiple images at once to{" "}
          <strong>save time while organising</strong>.
        </li>
        <li>
          <strong>UR4</strong>: As a user, I want to view image details (like
          people and events) to{" "}
          <strong>remember when and where they were taken</strong>.
        </li>
        <li>
          <strong>UR5</strong>: As a user, I want to delete images so I can{" "}
          <strong>clean up my album and save space</strong>.
        </li>
        <li>
          <strong>UR6</strong>: As a user, I want to see duplicate images so I
          can <strong>clean up my album and save space</strong>.
        </li>
        <li>
          <strong>UR7</strong>: As a user, I want to easily copy selected images
          into a folder for <strong>sharing with others</strong>.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mb-3 mt-8">
        Functional Requirements
      </h3>

      <h4 className="text-xl font-semibold mb-3">
        1. Tagging and Metadata Management
      </h4>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li>
          <strong>FR1.1</strong> The system shall allow the user to add one or
          more tags to any image using a predefined set of categories:
          <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
            <li>People in the image</li>
            <li>Event</li>
            <li>Emotion</li>
            <li>Date</li>
            <li>Location</li>
          </ul>
        </li>
        <li>
          <strong>FR1.2</strong> The system shall allow the user to leave one or
          more tag fields blank.
        </li>
        <li>
          <strong>FR1.3</strong> The system shall allow batch tagging operations
          (i.e., adding or removing tags from multiple images at once).
        </li>
        <li>
          <strong>FR1.4</strong> The system shall provide a tag management
          interface to:
          <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
            <li>
              View all tags added by the user during the current and previous
              sessions
            </li>
            <li>Rename existing user-added tags within the fixed categories</li>
            <li>
              Delete user-added tags that are no longer associated with any
              image
            </li>
          </ul>
        </li>
      </ul>

      <h4 className="text-xl font-semibold mb-3">2. Image Viewing</h4>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li>
          <strong>FR2.1</strong> The system shall display all images in a user
          interface.
        </li>
        <li>
          <strong>FR2.2</strong> The system shall allow the user to view EXIF
          metadata (if available) associated with each selected image.
        </li>
      </ul>

      <h4 className="text-xl font-semibold mb-3">3. Search and Filtering</h4>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li>
          <strong>FR3.1</strong> The system shall support filtering images by
          tag values entered under fixed categories (People, Event, Emotion,
          Date, Location).
        </li>
        <li>
          <strong>FR3.2</strong> The system shall allow combined filtering using
          multiple tag categories and additional criteria (e.g., images with
          missing tags).
        </li>
      </ul>

      <h4 className="text-xl font-semibold mb-3">
        4. Image File Operations and Sharing
      </h4>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li>
          <strong>FR4.1</strong> The system shall support deleting images by
          moving them to a designated trash folder, rather than performing
          permanent deletion.
        </li>
        <li>
          <strong>FR4.2</strong> The system shall support copying a single
          selected image to a user-specified output folder.
        </li>
        <li>
          <strong>FR4.3</strong> The system shall support copying all currently
          filtered images to a user-specified output folder.
        </li>
      </ul>

      <h4 className="text-xl font-semibold mb-3">
        5. Persistence and State Management
      </h4>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li>
          <strong>FR5.1</strong> The system shall maintain persistent storage of
          all user-added tags across sessions using a database or equivalent
          data store.
        </li>
        <li>
          <strong>FR5.2</strong> The system shall not persist automatically
          loaded tags or metadata.
        </li>
      </ul>

      <h4 className="text-xl font-semibold mb-3">
        6. Duplicate Image Detection
      </h4>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li>
          <strong>FR6.1</strong> The system shall detect duplicate images based
          on file similarity or content comparison and present potential
          duplicates to the user.
        </li>
        <li>
          <strong>FR6.2</strong> The system shall allow the user to manually
          review duplicates and decide which image(s) to retain or delete.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mb-3 mt-8">
        Non-Functional Requirements (NFR)
      </h3>

      <h4 className="text-xl font-semibold mb-3">1. Usability</h4>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li>
          <strong>NFR1</strong>: The system shall provide clear visual feedback
          when images are being loaded, filtered, or processed.
        </li>
        <li>
          <strong>NFR2</strong>: The interface shall be intuitive and require
          minimal instructions for a new user to begin organising images (~10
          minutes of learning time).
        </li>
        <li>
          <strong>NFR3</strong>: The system shall provide clear visual feedback
          when images are selected, copied, or deleted.
        </li>
      </ul>

      <h4 className="text-xl font-semibold mb-3">
        2. Reliability and Fault Tolerance
      </h4>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li>
          <strong>NFR4</strong>: The system shall preserve user-added tags and
          changes even in the event of an unexpected shutdown.
        </li>
        <li>
          <strong>NFR5</strong>: If an image fails to load, the system shall
          display a placeholder with a meaningful error message.
        </li>
      </ul>

      <h4 className="text-xl font-semibold mb-3">3. Data Persistence</h4>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li>
          <strong>NFR6</strong>: All user-added tags shall persist across
          sessions without requiring manual saving.
        </li>
        <li>
          <strong>NFR7</strong>: Deleted images shall be moved to a trash folder
          and shall not be permanently removed unless explicitly confirmed by
          the user.
        </li>
      </ul>

      <h4 className="text-xl font-semibold mb-3">4. Compatibility</h4>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li>
          <strong>NFR8</strong>: The application shall run on major desktop
          operating systems, including Windows, macOS, and Linux.
        </li>
      </ul>

      <h4 className="text-xl font-semibold mb-3">5. Privacy and Security</h4>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li>
          <strong>NFR9</strong>: The system shall not require or initiate any
          internet connection for any feature or function.
        </li>
        <li>
          <strong>NFR10</strong>: The system shall not transmit image data,
          descriptions, or metadata outside the local environment without
          explicit user action (e.g., saving to a removable storage device).
        </li>
        <li>
          <strong>NFR11</strong>: Any file deletion or copying operation shall
          require user confirmation before being executed.
        </li>
      </ul>
      <h2 className="text-3xl font-semibold mb-4 mt-10">Design Decisions</h2>
      <p className="mb-4 text-gray-800">
        Initially, I planned to use ExifTool to edit metadata embedded directly
        within image files. While ExifTool works well for JPEGs and some other
        formats, it does not provide consistent support across all image types.
        Given that the photo album project needs to handle a variety of image
        formats, this approach proved limiting.
      </p>
      <p className="mb-4 text-gray-800">
        To overcome this, I chose a non-destructive, format-independent method:
        storing custom, searchable metadata in a separate database. This
        approach offers several advantages:
      </p>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li>
          <strong>Format Independence</strong>: Unlike embedded metadata, the
          database solution works uniformly across all image formats, ensuring
          compatibility without additional format-specific handling.
        </li>
        <li>
          <strong>Non-Destructive</strong>: The original image files remain
          untouched, preserving their integrity and preventing accidental
          corruption.
        </li>
        <li>
          <strong>Searchability</strong>: Metadata stored in a structured
          database can be efficiently queried, enabling fast filtering and
          retrieval.
        </li>
        <li>
          <strong>Bulk Editing</strong>: Updating metadata for multiple images
          becomes significantly easier when managed through a central system.
        </li>
        <li>
          <strong>Structural Flexibility</strong>: A custom database allows for
          evolving metadata schemas, supporting future changes without affecting
          existing data or image files.
        </li>
      </ul>
      <p className="mb-4 text-gray-800">
        This decision supports scalability, maintainability, and user
        convenience.
      </p>

      <h3 className="text-2xl font-semibold mb-3 mt-8">
        Performance Considerations
      </h3>
      <p className="mb-4 text-gray-800">
        Although performance was not a primary design goal, practical steps were
        taken to ensure the application remains responsive when working with
        large collections of photos. Images are loaded at reduced resolution to
        conserve memory and speed up rendering. Additionally, pagination was
        implemented to avoid loading all images at once, which could otherwise
        cause the application to become sluggish or unresponsive when browsing
        folders containing hundreds or thousands of files. These optimisations
        allow the application to remain lightweight while handling real-world
        datasets efficiently.
      </p>
      <p className="mb-4 text-gray-800">
        These performance decisions were made to ensure the application remains
        responsive without introducing architectural complexity. They align with
        the broader design trade-offs: prioritising simplicity, clarity, and
        ease of use over scalability or cloud-based features.
      </p>

      <h2 className="text-3xl font-semibold mb-4 mt-10">
        Python Libraries and Tools
      </h2>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li>
          <strong>PyQt6</strong> &ndash; for building the GUI.
        </li>
        <li>
          <strong>SQLite</strong> &ndash; used as the local database for storing
          metadata.
        </li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4 mt-10">
        Software Architecture
      </h2>
      <p className="mb-4 text-gray-800">
        This project adopts the <strong>Model-View-Controller (MVC)</strong>{" "}
        architecture to promote modularity, separation of concerns, and
        long-term maintainability. The decision to use MVC was driven by the
        need to clearly separate the user interface logic, business logic, and
        data access, making the codebase easier to understand and extend.
      </p>

      <p className="mb-4 text-gray-800">
        The MVC pattern divides the application into three interconnected
        components:
      </p>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li>
          <strong>Model</strong>: Handles all interactions with the SQLite
          database, including reading and writing image metadata and performing
          filtered queries.
        </li>
        <li>
          <strong>View</strong>: Responsible for rendering the user interface
          and presenting data to the user. It reacts to updates from the
          controller but contains no business logic or direct data access code.
        </li>
        <li>
          <strong>Controller</strong>: Serves as the intermediary between the
          view and the model. It processes user input, applies business logic,
          and updates either the model or the view as needed.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mb-3 mt-8">File Structure</h3>
      <p className="mb-4 text-gray-800">
        The codebase is structured around these components to support the MVC
        architecture:
      </p>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-2 pl-6">
        <li>
          <strong>Model</strong>
          <ul className="list-disc pl-6 marker:text-gray-400 space-y-1">
            <li>
              <code>database_manager.py</code>: Manages all database operations,
              including CRUD actions and filtered image queries.
            </li>
          </ul>
        </li>
        <li>
          <strong>View</strong>
          <ul className="list-disc pl-6 marker:text-gray-400 space-y-1">
            <li>
              <code>main_window.py</code>: Implements the overall UI layout and
              main interface logic using PyQt6.
            </li>
            <li>
              <code>widgets/</code>: Contains reusable UI components, such as
              editable dropdowns and custom toast notifications.
            </li>
          </ul>
        </li>
        <li>
          <strong>Controller</strong>
          <ul className="list-disc pl-6 marker:text-gray-400 space-y-1">
            <li>
              <code>main_controller.py</code>: Orchestrates the application
              logic, including loading image folders, updating metadata,
              applying filters, and handling user interactions.
            </li>
          </ul>
        </li>
      </ul>

      <p className="mb-4 text-gray-800">
        Each part of the application has a well-defined role, making the system
        easier to scale and maintain as new features are introduced.
      </p>

      <h2 className="text-3xl font-semibold mb-4 mt-10">Architecture Notes</h2>
      <p className="mb-4 text-gray-800">
        The photo album application was developed using a simple, modular design
        that reflects its limited scope and focused purpose: to make photo
        tagging and filtering straightforward and user-friendly. The system was
        not intended to be scaled or deployed in complex environments, so the
        emphasis was placed on clarity, maintainability, and ease of use.
      </p>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li>
          <strong>Object-Oriented Programming (OOP)</strong>: Key
          components—such as image handling, metadata management, and user
          interface logic—were implemented as classes to improve separation of
          concerns and facilitate future updates.
        </li>
        <li>
          <strong>Single Responsibility Principle</strong>: Functions and
          classes were generally written to perform a single, clearly defined
          task, which helps keep the code understandable and easier to debug.
        </li>
        <li>
          <strong>Minimal External Dependencies</strong>: Core functionality is
          implemented using standard Python libraries and PyQt6, making the
          application lightweight, portable, and easy to set up locally.
        </li>
        <li>
          <strong>Readability Over Optimisation</strong>: Code was written with
          an emphasis on readability rather than performance or scalability, in
          line with the project’s aim to be easy to maintain and adapt by
          others.
        </li>
      </ul>
      <p className="mb-4 text-gray-800">
        This pragmatic and lightweight architecture supports the project’s goal
        as a personal or small-scale photo organiser, while still allowing for
        modest future improvements or extensions.
      </p>

      <h2 className="text-3xl font-semibold mb-4 mt-10">Database Schema</h2>
      <p className="mb-4 text-gray-800">
        The database schema was chosen to support the structured organisation
        and retrieval of photos based on associated metadata. The core
        principles guiding this schema were:
      </p>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li>
          <strong>Normalisation</strong> – Similar data like people, groups, and
          emotions are stored only once in their own tables, and connected to
          images through link tables. This avoids repeating the same information
          and keeps everything accurate and consistent.
        </li>
        <li>
          <strong>Queryability</strong> – The design supports efficient
          filtering and searching of images by associated tags, such as person,
          group, or emotion.
        </li>
      </ul>
      <div className="flex justify-center my-6">
        <Image
          src="/projects/photo-album/ERD.png"
          width={600}
          height={400}
          alt="Entity Relationship Diagram"
          className="rounded shadow-md"
        />
      </div>
      <p className="text-sm italic text-center mb-8">
        Figure 1: Entity-Relationship Diagram illustrating the relationships
        between the tables in the database.
      </p>
      <p className="mb-4 text-gray-800">
        Figure 1 presents the Entity-Relationship Diagram (ERD), which shows how
        the schema is structured. The <code>ImageMetadata</code> table, which
        stores core metadata for each image. It is linked to three tagging
        entities: <code>Person</code>, <code>GroupTag</code>, and{" "}
        <code>EmotionTag</code>, each of which contains unique tag values.
      </p>
      <p className="mb-4 text-gray-800">
        To support many-to-many relationships—where each image can be tagged
        with multiple people, groups, or emotions, the schema includes three
        join tables: <code>ImagePerson</code>, <code>ImageGroup</code>, and{" "}
        <code>ImageEmotion</code>. Each join table contains foreign keys that
        reference the primary keys in <code>ImageMetadata</code> and their
        respective tag tables. This design ensures flexibility and consistency
        while enabling efficient filtering such as “Show all photos of Shabaj or
        “Find all images tagged as ‘Happy’.”
      </p>

      <h2 className="text-3xl font-semibold mb-4 mt-10">Table Descriptions</h2>
      <h4 className="text-xl font-semibold mb-3 mt-8">ImageMetadata</h4>
      <p className="mb-2 text-gray-800">
        Stores one row per image with general metadata.
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="border px-3 py-2">Column</th>
              <th className="border px-3 py-2">Type</th>
              <th className="border px-3 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2">id</td>
              <td className="border px-3 py-2">INTEGER</td>
              <td className="border px-3 py-2">Primary key</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">filename</td>
              <td className="border px-3 py-2">TEXT</td>
              <td className="border px-3 py-2">Unique filename of the image</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">description</td>
              <td className="border px-3 py-2">TEXT</td>
              <td className="border px-3 py-2">
                User-provided description of the image
              </td>
            </tr>
            <tr>
              <td className="border px-3 py-2">date</td>
              <td className="border px-3 py-2">TEXT</td>
              <td className="border px-3 py-2">
                Date of the image (as string)
              </td>
            </tr>
            <tr>
              <td className="border px-3 py-2">tagged</td>
              <td className="border px-3 py-2">INTEGER</td>
              <td className="border px-3 py-2">
                Boolean flag (1 = tagged, 0 = untagged)
              </td>
            </tr>
            <tr>
              <td className="border px-3 py-2">location.id</td>
              <td className="border px-3 py-2">INTEGER</td>
              <td className="border px-3 py-2">Foreign key to `Location.id`</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 className="text-xl font-semibold mb-3 mt-8">Person</h4>
      <p className="mb-2 text-gray-800">
        Stores unique names of individuals who appear in images.
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="border px-3 py-2">Column</th>
              <th className="border px-3 py-2">Type</th>
              <th className="border px-3 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2">id</td>
              <td className="border px-3 py-2">INTEGER</td>
              <td className="border px-3 py-2">Primary key</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">person_name</td>
              <td className="border px-3 py-2">TEXT</td>
              <td className="border px-3 py-2">Unique name of the person</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 className="text-xl font-semibold mb-3 mt-8">ImagePerson</h4>
      <p className="mb-2 text-gray-800">
        Join table linking images to people (many-to-many).
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="border px-3 py-2">Column</th>
              <th className="border px-3 py-2">Type</th>
              <th className="border px-3 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2">image_id</td>
              <td className="border px-3 py-2">INTEGER</td>
              <td className="border px-3 py-2">
                Foreign key to `ImageMetadata.id`
              </td>
            </tr>
            <tr>
              <td className="border px-3 py-2">person_id</td>
              <td className="border px-3 py-2">INTEGER</td>
              <td className="border px-3 py-2">Foreign key to `Person.id`</td>
            </tr>
            <tr>
              <td className="border px-3 py-2"></td>
              <td className="border px-3 py-2"></td>
              <td className="border px-3 py-2">
                Composite primary key (`image_id`, `person_id`)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 className="text-xl font-semibold mb-3 mt-8">GroupTag</h4>
      <p className="mb-2 text-gray-800">
        Stores unique group labels such as “Family” or “Friends”.
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="border px-3 py-2">Column</th>
              <th className="border px-3 py-2">Type</th>
              <th className="border px-3 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2">id</td>
              <td className="border px-3 py-2">INTEGER</td>
              <td className="border px-3 py-2">Primary key</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">group_name</td>
              <td className="border px-3 py-2">TEXT</td>
              <td className="border px-3 py-2">Unique group name</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 className="text-xl font-semibold mb-3 mt-8">ImageGroup</h4>
      <p className="mb-2 text-gray-800">
        Join table linking images to groups (many-to-many).
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="border px-3 py-2">Column</th>
              <th className="border px-3 py-2">Type</th>
              <th className="border px-3 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2">image_id</td>
              <td className="border px-3 py-2">INTEGER</td>
              <td className="border px-3 py-2">
                Foreign key to `ImageMetadata.id`
              </td>
            </tr>
            <tr>
              <td className="border px-3 py-2">group_id</td>
              <td className="border px-3 py-2">INTEGER</td>
              <td className="border px-3 py-2">Foreign key to `GroupTag.id`</td>
            </tr>
            <tr>
              <td className="border px-3 py-2"></td>
              <td className="border px-3 py-2"></td>
              <td className="border px-3 py-2">
                Composite primary key (`image_id`, `group_id`)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 className="text-xl font-semibold mb-3 mt-8">EmotionTag</h4>
      <p className="mb-2 text-gray-800">
        Stores emotion labels associated with photos, e.g. "Happy", "Nostalgic".
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="border px-3 py-2">Column</th>
              <th className="border px-3 py-2">Type</th>
              <th className="border px-3 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2">id</td>
              <td className="border px-3 py-2">INTEGER</td>
              <td className="border px-3 py-2">Primary key</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">emotion_name</td>
              <td className="border px-3 py-2">TEXT</td>
              <td className="border px-3 py-2">Unique emotion name</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 className="text-xl font-semibold mb-3 mt-8">ImageEmotion</h4>
      <p className="mb-2 text-gray-800">
        Join table linking images to emotions (many-to-many).
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="border px-3 py-2">Column</th>
              <th className="border px-3 py-2">Type</th>
              <th className="border px-3 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2">image_id</td>
              <td className="border px-3 py-2">INTEGER</td>
              <td className="border px-3 py-2">
                Foreign key to `ImageMetadata.id`
              </td>
            </tr>
            <tr>
              <td className="border px-3 py-2">emotion_id</td>
              <td className="border px-3 py-2">INTEGER</td>
              <td className="border px-3 py-2">
                Foreign key to `EmotionTag.id`
              </td>
            </tr>
            <tr>
              <td className="border px-3 py-2"></td>
              <td className="border px-3 py-2"></td>
              <td className="border px-3 py-2">
                Composite primary key (`image_id`, `emotion_id`)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 className="text-xl font-semibold mb-3 mt-8">Location</h4>
      <p className="mb-2 text-gray-800">
        Stores structured location data that can be associated with images.
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="border px-3 py-2">Column</th>
              <th className="border px-3 py-2">Type</th>
              <th className="border px-3 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2">id</td>
              <td className="border px-3 py-2">INTEGER</td>
              <td className="border px-3 py-2">Primary key</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">name</td>
              <td className="border px-3 py-2">TEXT</td>
              <td className="border px-3 py-2">
                Name of the location (e.g., "Hyde Park")
              </td>
            </tr>
            <tr>
              <td className="border px-3 py-2">category</td>
              <td className="border px-3 py-2">TEXT</td>
              <td className="border px-3 py-2">
                Optional category (e.g., "Park", "Museum")
              </td>
            </tr>
            <tr>
              <td className="border px-3 py-2">country</td>
              <td className="border px-3 py-2">TEXT</td>
              <td className="border px-3 py-2">
                Country where the picture was taken
              </td>
            </tr>
            <tr>
              <td className="border px-3 py-2">region</td>
              <td className="border px-3 py-2">TEXT</td>
              <td className="border px-3 py-2">Regional subdivision</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">city</td>
              <td className="border px-3 py-2">TEXT</td>
              <td className="border px-3 py-2">City name</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">postcode</td>
              <td className="border px-3 py-2">TEXT</td>
              <td className="border px-3 py-2">Postal code of the location</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-4 text-gray-800">
        This table is referenced by the <code>ImageMetadata</code> table via the{" "}
        <code>location_id</code> foreign key, allowing each image to be
        optionally linked to a structured location entry. This enables
        location-based filtering (e.g., all photos taken in "London" or in
        "Museums").
      </p>

      <h3 className="text-2xl font-semibold mb-3 mt-8">
        Future Work / Known Limitations
      </h3>
      <p className="mb-4 text-gray-800">
        While the application meets its core goals, there are a few limitations
        in the current version and opportunities for future enhancements:
      </p>
      <ul className="mb-4 pl-5 list-disc marker:text-gray-500 space-y-1 pl-6">
        <li>
          <strong>Video Format Support</strong>: At present, the application is
          designed to work with image files only. Support for video files—such
          as tagging, thumbnail previews, and filtering—could be added in future
          versions to allow users to organise all their visual media in one
          place.
        </li>
        <li>
          <strong>AI Tagging</strong>: All tagging is currently manual. In
          future updates, computer vision techniques could be integrated to
          suggest tags automatically based on image content, such as recognising
          faces, scenes, or objects. This would significantly speed up the
          tagging process and help surface relevant metadata for older,
          forgotten images.
        </li>
        <li>
          <strong>Undo Operations</strong>: There is currently no undo
          functionality for deletions, tag edits, or batch operations.
          Introducing an undo/redo system would help prevent accidental data
          loss and give users more confidence when performing bulk edits or
          deletions.
        </li>
        <li>
          <strong>File Renaming</strong>: At present, the application does not
          support renaming image files. Providing the option to rename
          files—either manually or based on metadata—could improve consistency
          and make exported or shared files more meaningful.
        </li>
      </ul>
      <p className="mb-4 text-gray-800">
        These limitations were consciously accepted in order to keep the initial
        system lightweight, focused, and easy to maintain. However, addressing
        them in future iterations could improve usability and extend the
        system's capabilities without compromising its core values of simplicity
        and privacy.
      </p>
    </div>
  );
}
