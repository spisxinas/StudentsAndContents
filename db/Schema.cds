namespace myNamespace;

entity Content{
   key ID: Integer;
   url: String(2048);
   dataPublished: Date ;
   contentType: String;
   course: Association to Course;
}

entity Course{
   key ID: Integer;
   courseName: String(400);
   courseDuration:DecimalFloat;
   coursePrice:Decimal(5,2);
   publishedStatus: Boolean;
   content: Association to many Content on content.course = $self;
   enrollment: Association to many Enrollment on enrollment.course = $self 
}

entity Enrollment{
   key ID: Integer;
   course: Association to Course;
   student: Association to Student;
}

entity Student{
   key email: String(70);
   firstName: String(40);
   lastName: String(40);
   dataSignUp: Date;
   enrollment: Association to many Enrollment on enrollment.student = $self;
}