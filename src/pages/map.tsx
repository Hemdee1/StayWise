import Layout from "@/components/layout";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";

const Map = () => {
  const Map = dynamic(
    () => import("@/components/map"), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
  );

  return (
    <Layout>
      <main>
        <Map />
      </main>
    </Layout>
  );
};

export default Map;
