
import React from 'react';
import Header from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Leaf, Check } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow p-4 md:p-8">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="bg-green-100 p-6 rounded-full mb-4">
              <Leaf className="h-12 w-12 text-cropGreen" />
            </div>
            <h1 className="text-3xl font-bold mb-4">{t('aboutTitle')}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {t('aboutDescription')}
            </p>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">{t('howItWorks')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <Card className="bg-white shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-cropGreen font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t('step1')}</h3>
                  <p className="text-muted-foreground">
                    Use your smartphone camera to capture a clear image of the plant showing signs of disease or pest damage.
                  </p>
                </CardContent>
              </Card>
              
              {/* Step 2 */}
              <Card className="bg-white shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-cropGreen font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t('step2')}</h3>
                  <p className="text-muted-foreground">
                    Our advanced AI model processes the image to identify diseases, pests, and nutritional deficiencies.
                  </p>
                </CardContent>
              </Card>
              
              {/* Step 3 */}
              <Card className="bg-white shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-cropGreen font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t('step3')}</h3>
                  <p className="text-muted-foreground">
                    Get instant results with suggested treatments and preventive measures tailored to your crop's condition.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-bold mb-4">{t('developedBy')}</h3>
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Leaf className="h-6 w-6 text-cropGreen" />
              </div>
              <div>
                <h4 className="font-medium">Crop Doctor Research Team</h4>
                <p className="text-sm text-muted-foreground">
                  A collaborative effort between agricultural scientists and AI specialists
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
