
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check } from 'lucide-react';

const Treatments = () => {
  const { t } = useLanguage();
  
  // Treatment data
  const organicTreatments = [
    { name: "Neem Oil", description: "Natural pesticide effective against various insects and fungal infections." },
    { name: "Garlic Spray", description: "Controls aphids, caterpillars and other soft-bodied insects." },
    { name: "Baking Soda Solution", description: "Effective against powdery mildew and other fungal diseases." },
    { name: "Compost Tea", description: "Boosts plant immunity and soil health." }
  ];
  
  const chemicalTreatments = [
    { name: "Mancozeb", description: "Broad-spectrum fungicide effective against many crop diseases." },
    { name: "Imidacloprid", description: "Systemic insecticide for controlling sucking pests." },
    { name: "Carbendazim", description: "Systemic fungicide effective against various fungi." },
    { name: "Copper Oxychloride", description: "Protectant fungicide and bactericide." }
  ];
  
  const preventiveMeasures = [
    { name: "Crop Rotation", description: "Prevents buildup of disease-causing organisms in soil." },
    { name: "Proper Spacing", description: "Allows air circulation and reduces humidity around plants." },
    { name: "Regular Monitoring", description: "Early detection of pests and diseases for timely intervention." },
    { name: "Balanced Fertilization", description: "Proper nutrients help plants resist diseases naturally." }
  ];
  
  return (
    <Layout>
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">{t('treatmentsTitle')}</h1>
          <p className="text-muted-foreground">
            Discover effective solutions to treat and prevent crop diseases.
          </p>
        </div>
        
        <Tabs defaultValue="organic" className="mb-16">
          <TabsList className="flex w-full flex-wrap mb-8">
            <TabsTrigger value="organic" className="flex-grow text-xs sm:text-sm py-2">{t('organic')}</TabsTrigger>
            <TabsTrigger value="chemical" className="flex-grow text-xs sm:text-sm py-2">{t('chemical')}</TabsTrigger>
            <TabsTrigger value="preventive" className="flex-grow text-xs sm:text-sm py-2">{t('preventive')}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="organic" className="space-y-4">
            {organicTreatments.map((treatment, index) => (
              <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                      <Check className="h-4 w-4 text-cropGreen" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{treatment.name}</h3>
                      <p className="text-muted-foreground">{treatment.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="chemical" className="space-y-4">
            {chemicalTreatments.map((treatment, index) => (
              <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                      <Check className="h-4 w-4 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{treatment.name}</h3>
                      <p className="text-muted-foreground">{treatment.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="preventive" className="space-y-4">
            {preventiveMeasures.map((measure, index) => (
              <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-yellow-100 p-2 rounded-full mr-4 mt-1">
                      <Check className="h-4 w-4 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{measure.name}</h3>
                      <p className="text-muted-foreground">{measure.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
        
        <Card className="bg-gradient-to-r from-cropGreen-light to-cropGreen text-white mb-8">
          <CardHeader>
            <CardTitle className="text-center">Need Custom Advice?</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-4">
              Analyze your crop with our AI to get specific treatment recommendations tailored to your plant's condition.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Treatments;
