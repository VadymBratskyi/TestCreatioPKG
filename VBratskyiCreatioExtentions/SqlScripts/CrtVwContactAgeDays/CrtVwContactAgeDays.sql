create or alter view CrtVwContactAgeDays
as
select
Id, Name, BirthDate, DATEDIFF(DAY, BirthDate, GETDATE()) as Age
from Contact