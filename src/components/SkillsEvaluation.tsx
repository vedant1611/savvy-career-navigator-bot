
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { PlusCircle, CheckCircle2, Edit, Save } from 'lucide-react';
import { Input } from '@/components/ui/input';

type Skill = {
  id: string;
  name: string;
  proficiency: number;
  category: 'technical' | 'soft' | 'language' | 'other';
};

const initialSkills: Skill[] = [
  { id: '1', name: 'JavaScript', proficiency: 70, category: 'technical' },
  { id: '2', name: 'Project Management', proficiency: 85, category: 'soft' },
  { id: '3', name: 'English', proficiency: 90, category: 'language' },
  { id: '4', name: 'React', proficiency: 65, category: 'technical' },
  { id: '5', name: 'Communication', proficiency: 80, category: 'soft' },
  { id: '6', name: 'Problem Solving', proficiency: 75, category: 'soft' },
];

const SkillsEvaluation = () => {
  const [skills, setSkills] = useState<Skill[]>(initialSkills);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [newSkill, setNewSkill] = useState('');
  const [newCategory, setNewCategory] = useState<'technical' | 'soft' | 'language' | 'other'>('technical');
  const [showAddSkill, setShowAddSkill] = useState(false);
  const [editingSkill, setEditingSkill] = useState<string | null>(null);
  const [editValue, setEditValue] = useState<number>(0);

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      const newSkillItem: Skill = {
        id: Date.now().toString(),
        name: newSkill,
        proficiency: 50,
        category: newCategory,
      };
      setSkills([...skills, newSkillItem]);
      setNewSkill('');
      setShowAddSkill(false);
    }
  };

  const handleProficiencyChange = (id: string, value: number[]) => {
    setEditValue(value[0]);
  };

  const startEditing = (id: string, currentValue: number) => {
    setEditingSkill(id);
    setEditValue(currentValue);
  };

  const saveEdit = (id: string) => {
    setSkills(skills.map(skill => 
      skill.id === id ? { ...skill, proficiency: editValue } : skill
    ));
    setEditingSkill(null);
  };

  const skillLevelLabel = (proficiency: number): string => {
    if (proficiency >= 90) return 'Expert';
    if (proficiency >= 70) return 'Advanced';
    if (proficiency >= 40) return 'Intermediate';
    return 'Beginner';
  };

  const skillLevelColor = (proficiency: number): string => {
    if (proficiency >= 90) return 'bg-green-500';
    if (proficiency >= 70) return 'bg-blue-500';
    if (proficiency >= 40) return 'bg-yellow-500';
    return 'bg-gray-500';
  };

  return (
    <section className="py-10">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-career-dark mb-4">Skills Evaluation</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Assess your skills to identify strengths and areas for growth. This will help match you with careers that align with your capabilities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="all" onValueChange={setSelectedCategory}>
            <div className="flex justify-between items-center mb-4">
              <TabsList>
                <TabsTrigger value="all">All Skills</TabsTrigger>
                <TabsTrigger value="technical">Technical</TabsTrigger>
                <TabsTrigger value="soft">Soft Skills</TabsTrigger>
                <TabsTrigger value="language">Languages</TabsTrigger>
                <TabsTrigger value="other">Other</TabsTrigger>
              </TabsList>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setShowAddSkill(!showAddSkill)}
                className="flex items-center gap-1"
              >
                <PlusCircle className="h-4 w-4" />
                <span>Add Skill</span>
              </Button>
            </div>

            {showAddSkill && (
              <Card className="mb-6">
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1 block">Skill Name</label>
                        <Input
                          placeholder="Enter skill name"
                          value={newSkill}
                          onChange={(e) => setNewSkill(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Category</label>
                        <select 
                          className="w-full p-2 border rounded-md"
                          value={newCategory}
                          onChange={(e) => setNewCategory(e.target.value as any)}
                        >
                          <option value="technical">Technical</option>
                          <option value="soft">Soft Skills</option>
                          <option value="language">Languages</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button 
                        onClick={handleAddSkill}
                        disabled={!newSkill.trim()}
                        className="bg-career-primary hover:bg-career-secondary"
                      >
                        Add Skill
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <TabsContent value="all" className="mt-0">
              <div className="grid gap-4">
                {filteredSkills.map(skill => (
                  <Card key={skill.id}>
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-medium">{skill.name}</h3>
                            <Badge variant="outline">{skill.category}</Badge>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full ${skillLevelColor(skill.proficiency)}`}></div>
                            <span className="text-sm text-muted-foreground">{skillLevelLabel(skill.proficiency)}</span>
                          </div>
                        </div>
                        <div className="flex-1 flex gap-4 items-center">
                          <div className="flex-1">
                            {editingSkill === skill.id ? (
                              <Slider
                                defaultValue={[skill.proficiency]}
                                max={100}
                                step={5}
                                onValueChange={(v) => handleProficiencyChange(skill.id, v)}
                              />
                            ) : (
                              <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                  className="bg-career-primary h-2.5 rounded-full"
                                  style={{ width: `${skill.proficiency}%` }}
                                ></div>
                              </div>
                            )}
                          </div>
                          <div className="w-12 text-sm text-center">
                            {editingSkill === skill.id ? editValue : skill.proficiency}%
                          </div>
                          {editingSkill === skill.id ? (
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => saveEdit(skill.id)}
                            >
                              <Save className="h-4 w-4" />
                            </Button>
                          ) : (
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => startEditing(skill.id, skill.proficiency)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {filteredSkills.length === 0 && (
                  <div className="text-center py-8 bg-muted rounded-lg">
                    <p className="text-muted-foreground">No skills in this category. Add some skills to get started.</p>
                  </div>
                )}
              </div>
            </TabsContent>
            <TabsContent value="technical" className="mt-0">
              {/* Same structure as "all" but filtered for technical */}
            </TabsContent>
            <TabsContent value="soft" className="mt-0">
              {/* Same structure as "all" but filtered for soft */}
            </TabsContent>
            <TabsContent value="language" className="mt-0">
              {/* Same structure as "all" but filtered for language */}
            </TabsContent>
            <TabsContent value="other" className="mt-0">
              {/* Same structure as "all" but filtered for other */}
            </TabsContent>
          </Tabs>

          <div className="mt-8 flex justify-center">
            <Button className="bg-career-primary hover:bg-career-secondary">Generate Skills Report</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsEvaluation;
