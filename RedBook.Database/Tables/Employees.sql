CREATE TABLE [dbo].[Employees] (
    [EmpId]     INT           NOT NULL,
    [FirstName] NVARCHAR (50) NOT NULL,
    [LastName]  NVARCHAR (50) NOT NULL,
    [UserType]  NVARCHAR (10) NOT NULL,
    [Slt]       NVARCHAR (10) NOT NULL,
    PRIMARY KEY CLUSTERED ([EmpId] ASC),
    UNIQUE NONCLUSTERED ([EmpId] ASC)
);

