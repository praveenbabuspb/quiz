import React from 'react';
import { ClassLevel, Subject } from '../types';
import { BookOpen, GraduationCap } from 'lucide-react';

interface TopicSelectorProps {
  classes: ClassLevel[];
  onSelectSubject: (classId: string, subjectId: string) => void;
}

export function TopicSelector({ classes, onSelectSubject }: TopicSelectorProps) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex items-center justify-center mb-8">
        <GraduationCap className="w-8 h-8 text-indigo-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800">Choose Your Class and Subject</h2>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2">
        {classes.map((classLevel) => (
          <div key={classLevel.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-indigo-600 px-6 py-4">
              <h3 className="text-xl font-semibold text-white">{classLevel.name}</h3>
            </div>
            <div className="p-6">
              <div className="grid gap-3">
                {classLevel.subjects.map((subject) => (
                  <button
                    key={subject.id}
                    onClick={() => onSelectSubject(classLevel.id, subject.id)}
                    className="w-full py-3 px-4 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg 
                             transition-colors duration-200 flex items-center justify-between font-medium"
                  >
                    <span className="flex items-center">
                      <BookOpen className="w-5 h-5 mr-2" />
                      {subject.name}
                    </span>
                    <span className="text-sm text-indigo-600">
                      {subject.questions.length} questions
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}