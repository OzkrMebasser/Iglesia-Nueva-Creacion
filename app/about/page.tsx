"use client";
import GridMotion from "@/components/ui/GridMotion";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function About() {
  const { t } = useTranslation();

  const items = [
    "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fhero-grid-motion%2FiglesiaNuevaCreacion.jpg?alt=media&token=59155a30-52c7-4a32-800d-19441efcea16",
    "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fhero-grid-motion%2FiglesiaNuevaCreacion-1.jpg?alt=media&token=ae3d5751-19b1-4021-9b25-a2319a7b8e4a",
    "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fhero-grid-motion%2FiglesiaNuevaCreacion-2.jpg?alt=media&token=d5f01b55-6ec4-4f6f-8056-1350c670355b",
    "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fhero-grid-motion%2FiglesiaNuevaCreacion-3.jpg?alt=media&token=905815f9-e4e5-4f4c-82f2-da4b5798a5a2",
    "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fhero-grid-motion%2FiglesiaNuevaCreacion-4.jpg?alt=media&token=cf86ec03-67a4-4a87-84a6-7ed475d963d4",
    "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fhero-grid-motion%2FiglesiaNuevaCreacion-5.jpg?alt=media&token=2b64ebcf-bbd1-455d-87a1-8429d4ac99b8",
    "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fhero-grid-motion%2FiglesiaNuevaCreacion-6.jpg?alt=media&token=65bbfdc6-b523-495a-8d8d-08f138a4dae0",
    "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fhero-grid-motion%2FiglesiaNuevaCreacion-7.jpg?alt=media&token=a20199bd-dd89-4427-bedb-0f1b26966814",
    "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fhero-grid-motion%2FiglesiaNuevaCreacion-8.jpg?alt=media&token=6850f773-3d08-4aae-8be6-b3513ad61095",
    "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fhero-grid-motion%2FiglesiaNuevaCreacion-9.jpg?alt=media&token=fa9eb5ef-7540-4c5f-9f7c-545190ef176c",
    "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fhero-grid-motion%2FiglesiaNuevaCreacion-10.jpg?alt=media&token=bafaa9eb-4dbc-4bf8-a9fa-0377a7e5bee0",
    "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fhero-grid-motion%2FiglesiaNuevaCreacion-11.jpg?alt=media&token=4a06ec9b-7a3b-453c-8703-5e3a05319cdd ",
    "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fhero-grid-motion%2FiglesiaNuevaCreacion-12.jpg?alt=media&token=76af48c9-87b4-4bd2-b409-bd6bb9f56d6e ",
    "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fhero-grid-motion%2FiglesiaNuevaCreacion-13.jpg?alt=media&token=9f1aff68-bb01-4ac7-9141-5be5087bdfed",
    "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fhero-grid-motion%2FiglesiaNuevaCreacion-14.jpg?alt=media&token=bfe869d3-4c47-4144-bf52-d370f8361e58",
    "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fhero-grid-motion%2FiglesiaNuevaCreacion-15.jpg?alt=media&token=7a09da51-ff35-43ea-ab91-e284bd3bd440",
    "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fhero-grid-motion%2FiglesiaNuevaCreacion-16.jpg?alt=media&token=81b3bcaf-5ad6-485a-b79c-b0525442237a",
    "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fhero-grid-motion%2FiglesiaNuevaCreacion.jpg?alt=media&token=59155a30-52c7-4a32-800d-19441efcea16",
    "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fhero-grid-motion%2FiglesiaNuevaCreacion-1.jpg?alt=media&token=ae3d5751-19b1-4021-9b25-a2319a7b8e4a",
    "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fhero-grid-motion%2FiglesiaNuevaCreacion-2.jpg?alt=media&token=d5f01b55-6ec4-4f6f-8056-1350c670355b",
    "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fhero-grid-motion%2FiglesiaNuevaCreacion-3.jpg?alt=media&token=905815f9-e4e5-4f4c-82f2-da4b5798a5a2",
    "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fhero-grid-motion%2FiglesiaNuevaCreacion-4.jpg?alt=media&token=cf86ec03-67a4-4a87-84a6-7ed475d963d4",
    "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fhero-grid-motion%2FiglesiaNuevaCreacion-5.jpg?alt=media&token=2b64ebcf-bbd1-455d-87a1-8429d4ac99b8",
    "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fhero-grid-motion%2FiglesiaNuevaCreacion-6.jpg?alt=media&token=65bbfdc6-b523-495a-8d8d-08f138a4dae0",
    "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fhero-grid-motion%2FiglesiaNuevaCreacion-7.jpg?alt=media&token=a20199bd-dd89-4427-bedb-0f1b26966814",
    "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fhero-grid-motion%2FiglesiaNuevaCreacion-8.jpg?alt=media&token=6850f773-3d08-4aae-8be6-b3513ad61095",
    "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fhero-grid-motion%2FiglesiaNuevaCreacion-9.jpg?alt=media&token=fa9eb5ef-7540-4c5f-9f7c-545190ef176c",
    "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fhero-grid-motion%2FiglesiaNuevaCreacion-10.jpg?alt=media&token=bafaa9eb-4dbc-4bf8-a9fa-0377a7e5bee0",
    "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fhero-grid-motion%2FiglesiaNuevaCreacion-11.jpg?alt=media&token=4a06ec9b-7a3b-453c-8703-5e3a05319cdd ",
    "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fhero-grid-motion%2FiglesiaNuevaCreacion-12.jpg?alt=media&token=76af48c9-87b4-4bd2-b409-bd6bb9f56d6e ",
  ];

  // const shuffledItems = [...items].sort(() => Math.random() - 0.5);

  const imageUrl =
    "https://images.pexels.com/photos/6134813/pexels-photo-6134813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  // const items = Array.from({ length: 28 }, () => imageUrl);
  return (
    <div className="w-full mx-auto  py-16">
      {/* Hero Section */}
      <div className="relative h-[80vh] mb-16">
        {/* <Image
          src="https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2FiglesiaNuevaCreacion.jpg?alt=media&token=ea641a35-f9f7-4682-994b-4fbf73ca9695"
          alt="Church Interior"
          fill
          className="object-cover "
          priority
        /> */}
        <GridMotion items={items} />

        <div className="absolute inset-0 bg-[black] bg-opacity-30 rounded-lg flex items-center justify-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {t("about.title")}
          </h1>
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">
            {t("about.mission.title")}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {t("about.mission.description")}
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">{t("about.vision.title")}</h2>
          <p className="text-gray-600 leading-relaxed">
            {t("about.vision.description")}
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {t("about.values.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["faith", "community", "service"].map((value) => (
            <div
              key={value}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <h3 className="text-xl font-bold mb-4">
                {t(`about.values.${value}.title`)}
              </h3>
              <p className="text-gray-600">
                {t(`about.values.${value}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">
          {t("about.leadership.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["pastor", "elder1", "elder2"].map((leader) => (
            <div
              key={leader}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={t(`about.leadership.${leader}.image`)}
                  alt={t(`about.leadership.${leader}.name`)}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">
                {t(`about.leadership.${leader}.name`)}
              </h3>
              <p className="text-gray-600 mb-2">
                {t(`about.leadership.${leader}.role`)}
              </p>
              <p className="text-gray-600">
                {t(`about.leadership.${leader}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
