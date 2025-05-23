
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useLanguage } from '@/contexts/LanguageContext';
import { Search, Plus, Minus } from 'lucide-react';

const Library = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<{[key: string]: boolean}>({});
  
  // Library data
  const diseaseLibrary = [
    {
      id: "1",
      crop: "Tomato",
      disease: "Late Blight",
      symptoms: "Dark, water-soaked spots on leaves that quickly grow into large brown-black lesions. White, fuzzy growth may appear on undersides of leaves in humid conditions.",
      cause: "Phytophthora infestans (fungus-like organism)",
      management: "Use resistant varieties, provide good drainage, apply fungicides preventively, remove infected plants."
    },
    {
      id: "2",
      crop: "Rice",
      disease: "Bacterial Leaf Blight",
      symptoms: "Water-soaked yellowish stripes on leaf margins that turn white or gray and eventually dry out. Entire leaves may become yellow and die.",
      cause: "Xanthomonas oryzae pv. oryzae (bacteria)",
      management: "Plant resistant varieties, use balanced fertilization, practice field sanitation, use disease-free seeds."
    },
    {
      id: "3",
      crop: "Wheat",
      disease: "Powdery Mildew",
      symptoms: "White, powdery fungal growth on leaves, stems, and heads. Affected tissues may become yellow and eventually brown.",
      cause: "Blumeria graminis (fungus)",
      management: "Plant resistant varieties, apply fungicides early, ensure proper spacing, rotate crops."
    },
    {
      id: "4",
      crop: "Cotton",
      disease: "Cotton Leaf Curl Virus",
      symptoms: "Upward curling of leaves, thickened veins, and dark green coloration. Plants may develop leaf-like outgrowths (enations) on undersides of leaves.",
      cause: "Cotton Leaf Curl Virus (transmitted by whiteflies)",
      management: "Control whitefly population, plant resistant varieties, remove alternative hosts, adjust planting dates."
    },
    {
      id: "5",
      crop: "Potato",
      disease: "Early Blight",
      symptoms: "Dark brown to black lesions with concentric rings on lower/older leaves first. Affected leaves turn yellow and drop.",
      cause: "Alternaria solani (fungus)",
      management: "Crop rotation, fungicide application, provide adequate nutrition, proper plant spacing."
    }
  ];
  
  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  const filteredDiseases = diseaseLibrary.filter(disease => 
    disease.crop.toLowerCase().includes(searchTerm.toLowerCase()) || 
    disease.disease.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <Layout>
      <div className="w-full">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold mb-3">{t('libraryTitle')}</h1>
          <p className="text-muted-foreground mb-4 text-sm">
            Reference guide to common crop diseases, symptoms, and management practices.
          </p>
          
          <div className="relative mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder={t('searchDisease')}
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="space-y-3 mb-16">
          {filteredDiseases.length > 0 ? (
            filteredDiseases.map(disease => (
              <Card key={disease.id} className="bg-white shadow-sm">
                <Collapsible
                  open={openItems[disease.id]}
                  onOpenChange={() => toggleItem(disease.id)}
                >
                  <CollapsibleTrigger className="w-full text-left">
                    <CardHeader className="p-3 cursor-pointer flex flex-row items-center justify-between">
                      <div>
                        <CardTitle className="text-base">{disease.crop} - {disease.disease}</CardTitle>
                      </div>
                      {openItems[disease.id] ? (
                        <Minus className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Plus className="h-4 w-4 text-muted-foreground" />
                      )}
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="p-3 pt-0 border-t">
                      <div className="space-y-3 text-sm">
                        <div>
                          <h4 className="font-semibold text-xs uppercase text-muted-foreground mb-1">Symptoms</h4>
                          <p>{disease.symptoms}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-xs uppercase text-muted-foreground mb-1">Cause</h4>
                          <p>{disease.cause}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-xs uppercase text-muted-foreground mb-1">Management</h4>
                          <p>{disease.management}</p>
                        </div>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))
          ) : (
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <p className="text-muted-foreground">No diseases found for your search term.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Library;
