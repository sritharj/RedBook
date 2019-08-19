using RedBook.Model;
using RedBook.Model.Interfaces;
using RedBook.Service.Interfaces;
using RedBook.Service.Requests;
using RedBook.Service.Responses;
using System;

namespace RedBook.Service.Implementations
{
    public class UserInfoService : IUserInfoService
    {
        private readonly IUserRepository _userRepo;

        public UserInfoService
        (
            IUserRepository userRepo
        )
        {
            _userRepo = userRepo;
        }

        public GetUserResponse Authenticate(GetUserRequest request)
        {
            var response = new GetUserResponse();

            var data = _userRepo.Authenticate(request.EmpId, request.Password);
            if (data == null) return null;

            data.UserInfo = _userRepo.Find(request.EmpId);
            response.User = data;
            response.Success = true;

            return response;
        }

        public BaseResponse Register(RegUserRequest request)
        {
            var response = new BaseResponse();


            try
            {
                if (_userRepo.Check(request.EmpId, request.First, request.Last, request.Role) != null)
                {
                    _userRepo.Register(request.EmpId, request.Password);
                    response.Success = true;
                };

            }
            catch(Exception ex)
            {
                response.AddMessage(ex.Message);
            }
            return response;
        }
    }
}
