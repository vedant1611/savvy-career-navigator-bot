
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowUp, ArrowDown, TrendingUp, Briefcase, DollarSign, Users } from 'lucide-react';

const salaryData = [
  { role: 'Software Engineer', salary: 120000, industry: 'Technology' },
  { role: 'Data Scientist', salary: 135000, industry: 'Technology' },
  { role: 'Product Manager', salary: 125000, industry: 'Technology' },
  { role: 'UX Designer', salary: 110000, industry: 'Design' },
  { role: 'Marketing Manager', salary: 95000, industry: 'Marketing' },
  { role: 'Sales Executive', salary: 85000, industry: 'Sales' },
  { role: 'HR Specialist', salary: 75000, industry: 'Human Resources' },
  { role: 'Financial Analyst', salary: 90000, industry: 'Finance' },
];

const growthData = [
  { name: 'Jan', growth: 1.2 },
  { name: 'Feb', growth: 1.5 },
  { name: 'Mar', growth: 1.1 },
  { name: 'Apr', growth: 2.3 },
  { name: 'May', growth: 2.1 },
  { name: 'Jun', growth: 2.6 },
  { name: 'Jul', growth: 3.1 },
  { name: 'Aug', growth: 3.5 },
  { name: 'Sep', growth: 3.2 },
  { name: 'Oct', growth: 3.8 },
  { name: 'Nov', growth: 4.1 },
  { name: 'Dec', growth: 4.5 },
];

const demandTrends = [
  { 
    title: 'Software Development', 
    growth: '+15%', 
    direction: 'up',
    description: 'Growing demand for full-stack developers with React and Node.js experience.' 
  },
  { 
    title: 'Data Science', 
    growth: '+28%', 
    direction: 'up',
    description: 'High demand for professionals with machine learning and AI expertise.' 
  },
  { 
    title: 'Cybersecurity', 
    growth: '+22%', 
    direction: 'up',
    description: 'Critical need for security specialists as cyber threats increase.' 
  },
  { 
    title: 'Digital Marketing', 
    growth: '+12%', 
    direction: 'up',
    description: 'Continued growth in need for specialists in SEO, content, and social media.' 
  },
  { 
    title: 'Administrative Support', 
    growth: '-5%', 
    direction: 'down',
    description: 'Declining due to automation and AI tools replacing routine tasks.' 
  },
  { 
    title: 'Print Publishing', 
    growth: '-10%', 
    direction: 'down',
    description: 'Continues to decline as media consumption shifts to digital platforms.' 
  },
];

const JobMarketInsights = () => {
  return (
    <section className="py-10 bg-career-light bg-opacity-30">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-career-dark mb-4">Job Market Insights</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore current trends, salary information, and growth opportunities across different industries and roles.
          </p>
        </div>

        <Tabs defaultValue="overview" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Market Overview</TabsTrigger>
            <TabsTrigger value="salary">Salary Data</TabsTrigger>
            <TabsTrigger value="trends">Industry Trends</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Job Growth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    <div className="text-2xl font-bold">4.5%</div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Year-over-year growth across all sectors
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Open Positions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Briefcase className="h-5 w-5 text-career-primary" />
                    <div className="text-2xl font-bold">3.2M</div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Currently available job openings
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Avg. Salary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-5 w-5 text-green-500" />
                    <div className="text-2xl font-bold">$85.4K</div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    National average across industries
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Job Market Growth (YoY)</CardTitle>
                <CardDescription>
                  Annual job growth percentage across all industries
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={growthData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="growth" 
                        stroke="#0891b2" 
                        activeDot={{ r: 8 }} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Fastest Growing Fields</CardTitle>
                  <CardDescription>
                    Industries with the highest growth rate
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {demandTrends.slice(0, 3).map((trend, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-0.5">
                          <ArrowUp className="h-4 w-4 text-green-500" />
                        </div>
                        <div>
                          <div className="font-medium flex items-center gap-2">
                            {trend.title} 
                            <span className="text-green-500 text-sm font-semibold">{trend.growth}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{trend.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Declining Fields</CardTitle>
                  <CardDescription>
                    Industries experiencing job loss or lower demand
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {demandTrends.slice(4, 7).map((trend, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-0.5">
                          <ArrowDown className="h-4 w-4 text-red-500" />
                        </div>
                        <div>
                          <div className="font-medium flex items-center gap-2">
                            {trend.title} 
                            <span className="text-red-500 text-sm font-semibold">{trend.growth}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{trend.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="salary" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Average Salaries by Role</CardTitle>
                <CardDescription>Comparison of median salaries across different job titles</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={salaryData}
                      layout="vertical"
                      margin={{
                        top: 5,
                        right: 30,
                        left: 100,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="role" type="category" />
                      <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Salary']} />
                      <Bar dataKey="salary" fill="#0891b2" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="trends" className="mt-6">
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Current Demand & Future Projections</CardTitle>
                  <CardDescription>
                    Industry growth trends and 5-year projections
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="divide-y">
                    {demandTrends.map((trend, index) => (
                      <li key={index} className="py-4 first:pt-0 last:pb-0">
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5">
                            {trend.direction === 'up' ? (
                              <ArrowUp className="h-4 w-4 text-green-500" />
                            ) : (
                              <ArrowDown className="h-4 w-4 text-red-500" />
                            )}
                          </div>
                          <div>
                            <div className="font-medium flex items-center gap-2">
                              {trend.title} 
                              <span 
                                className={
                                  trend.direction === 'up' 
                                    ? "text-green-500 text-sm font-semibold" 
                                    : "text-red-500 text-sm font-semibold"
                                }
                              >
                                {trend.growth}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">{trend.description}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default JobMarketInsights;
