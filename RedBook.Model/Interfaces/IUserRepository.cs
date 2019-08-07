using System;
using System.Collections.Generic;
using System.Text;

namespace RedBook.Model.Interfaces
{
    public interface IUserRepository
    {
        User GetUser(int empId);
        User Authenticate(int empId, string pw);
    }
}
