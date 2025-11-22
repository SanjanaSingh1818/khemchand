import { Card, CardContent } from "@/components/ui/card";

const Journey = () => {
  const milestones = [
    { year: "1983", title: "Company Founded", description: "" },
    { year: "1986", title: "First Major Contract", description: "" },
    { year: "2000", title: "Leadership Expansion", description: "Mr. Sandeep Sukhwani" },
    { year: "2004", title: "Flash Butt Welding", description: "" },
    { year: "2009", title: "USFD Testing", description: "" },
    { year: "2015", title: "Lubrication Systems", description: "" },
    { year: "2024", title: "New Horizons", description: "30+ years of excellence" },
  ];

  // Positions along the diagonal line (0 = start, 1 = end)
  const positions = [0, 0.16, 0.33, 0.48, 0.63, 0.80, 1];

  return (
    <section className="py-16 relative bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">

        <h2 className="text-4xl md:text-5xl font-bold text-center text-navy mb-12">
          Our Journey
        </h2>

        {/* DIAGONAL LINE (100% accurate) */}
        <div className="relative w-full h-[480px] md:h-[560px]">

          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <line
              x1="12%"
              y1="85%"
              x2="92%"
              y2="12%"
              stroke="#0A2A6B"
              strokeWidth="4"
            />
          </svg>

          {/* DOTS + TEXT + CARDS */}
          {milestones.map((item, index) => {
            const t = positions[index];
            // Linear interpolation for accurate dot position
            const x = 12 + t * (92 - 12); // percentage
            const y = 85 - t * (85 - 12); // percentage

            return (
              <div
                key={index}
                className="absolute flex flex-col items-center"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >

                {/* DOT placed EXACTLY on the line */}
                <div className="w-4 h-4 bg-red-600 rounded-full border-2 border-white shadow"></div>

                {/* Year */}
                <div className="text-red-600 font-bold text-sm mt-1 mb-1">
                  {item.year}
                </div>

                {/* Card */}
                <Card className="w-[140px] shadow-md rounded-xl">
                  <CardContent className="p-2 text-center">
                    <h3 className="text-xs font-semibold text-navy">{item.title}</h3>
                    {item.description && (
                      <p className="text-[10px] text-muted-foreground mt-1 leading-tight">
                        {item.description}
                      </p>
                    )}
                  </CardContent>
                </Card>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Journey;
