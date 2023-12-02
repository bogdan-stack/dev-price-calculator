"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const CalculatorForm = () => {
  const [frontEnd, setFrontEnd] = useState({ tasks: 0, hoursPerTask: 0 });
  const [backEnd, setBackEnd] = useState({ tasks: 0, hoursPerTask: 0 });
  const [testing, setTesting] = useState({ tasks: 0, hoursPerTask: 0 });
  const [security, setSecurity] = useState({ tasks: 0, hoursPerTask: 0 });
  const [deployment, setDeployment] = useState({ tasks: 0, hoursPerTask: 0 });

  const calculateBaseDevelopmentTime = () => {
    const frontEndTime = frontEnd.tasks * frontEnd.hoursPerTask;
    const backEndTime = backEnd.tasks * backEnd.hoursPerTask;
    const testingTime = testing.tasks * testing.hoursPerTask;
    const securityTime = security.tasks * security.hoursPerTask;
    const deploymentTime = deployment.tasks * deployment.hoursPerTask;

    const baseDevelopmentTime = frontEndTime + backEndTime + testingTime + securityTime + deploymentTime;

    return baseDevelopmentTime;
  };

  return (
    <Card className=" relative w-full">
      <CardHeader>
        <CardTitle>Base development time</CardTitle>
        <CardDescription>Time estimate for your project.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          {/* Front End Section */}
          <div className='mb-1'>
            <Label className="font-bold">Front End:</Label>
          </div>
          <div className="mb-1">
            <Label>Number of Tasks:</Label>
            <Input
              type="number"
              value={frontEnd.tasks}
              onChange={(e) => setFrontEnd({ ...frontEnd, tasks: parseInt(e.target.value, 10) })}
            />
          </div>
          <div className="mb-1">
            <Label>Hours per Task:</Label>
            <Input
              type="number"
              value={frontEnd.hoursPerTask}
              onChange={(e) => setFrontEnd({ ...frontEnd, hoursPerTask: parseInt(e.target.value, 10) })}
            />
          </div>

          {/* Back End Section */}
          <div className='mb-1'>
            <Label className="font-bold">Back End:</Label>
          </div>
          <div className="mb-1">
            <Label>Number of Tasks:</Label>
            <Input
              type="number"
              value={backEnd.tasks}
              onChange={(e) => setBackEnd({ ...backEnd, tasks: parseInt(e.target.value, 10) })}
            />
          </div>
          <div className="mb-1">
            <Label>Hours per Task:</Label>
            <Input
              type="number"
              value={backEnd.hoursPerTask}
              onChange={(e) => setBackEnd({ ...backEnd, hoursPerTask: parseInt(e.target.value, 10) })}
            />
          </div>

          {/* Testing Section */}
          <div className='mb-1'>
            <Label className="font-bold">Testing:</Label>
          </div>
          <div className="mb-1">
            <Label>Number of Tasks:</Label>
            <Input
              type="number"
              value={testing.tasks}
              onChange={(e) => setTesting({ ...testing, tasks: parseInt(e.target.value, 10) })}
            />
          </div>
          <div className="mb-1">
            <Label>Hours per Task:</Label>
            <Input
              type="number"
              value={testing.hoursPerTask}
              onChange={(e) => setTesting({ ...testing, hoursPerTask: parseInt(e.target.value, 10) })}
            />
          </div>

          {/* Security Section */}
          <div className='mb-1'>
            <Label className="font-bold">Security:</Label>
          </div>
          <div className="mb-1">
            <Label>Number of Tasks:</Label>
            <Input
              type="number"
              value={security.tasks}
              onChange={(e) => setSecurity({ ...security, tasks: parseInt(e.target.value, 10) })}
            />
          </div>
          <div className="mb-1">
            <Label>Hours per Task:</Label>
            <Input
              type="number"
              value={security.hoursPerTask}
              onChange={(e) => setSecurity({ ...security, hoursPerTask: parseInt(e.target.value, 10) })}
            />
          </div>

          {/* Deployment Section */}
          <div className='mb-1'>
            <Label className="font-bold">Deployment:</Label>
          </div>
          <div className="mb-1">
            <Label>Number of Tasks:</Label>
            <Input
              type="number"
              value={deployment.tasks}
              onChange={(e) => setDeployment({ ...deployment, tasks: parseInt(e.target.value, 10) })}
            />
          </div>
          <div className="mb-1">
            <Label>Hours per Task:</Label>
            <Input
              type="number"
              value={deployment.hoursPerTask}
              onChange={(e) => setDeployment({ ...deployment, hoursPerTask: parseInt(e.target.value, 10) })}
            />
          </div>

          {/* Total Base Development Time */}
          <div className='mb-1'>
            <Label className="font-bold">Total Base Development Time:</Label>
          </div>
          <div className="mb-1">
            <span> {calculateBaseDevelopmentTime()} hours</span>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CalculatorForm;
