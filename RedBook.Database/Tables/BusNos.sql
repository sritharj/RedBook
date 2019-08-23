CREATE TABLE [dbo].[BusNos] (
    [BusNo] NVARCHAR (3) NOT NULL,
    PRIMARY KEY ([BusNo] ASC),
    UNIQUE NONCLUSTERED ([BusNo] ASC)
);

