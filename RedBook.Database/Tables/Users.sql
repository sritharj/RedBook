CREATE TABLE [dbo].[Users] (
    [EmpId]    INT             NOT NULL,
    [Password] VARBINARY (MAX) NOT NULL,
    PRIMARY KEY ([EmpId] ASC),
    UNIQUE NONCLUSTERED ([EmpId] ASC),
    CONSTRAINT [FK_Emp_Id] FOREIGN KEY ([EmpId]) REFERENCES [dbo].[Employees] ([EmpId])
);

