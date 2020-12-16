using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LMS.Models;

namespace LMS.Controllers
{
    [RoutePrefix("api/client")]
    public class ClientController : ApiController
    {
        LMSEntities4 DB = new LMSEntities4();

        [Route("Homeloandetails")]
        [HttpGet]
        public object Homeloandetails()
        {

            var a = DB.Loans.ToList();
            return a;
        }
      








        [Route("HomeloanReject")]
        [HttpDelete]
        public object HomeloanReject(int id)
        {
            var obj = DB.Loans.Where(x => x.LoanAccountNo == id).ToList().FirstOrDefault();
            DB.Loans.Remove(obj);
            DB.SaveChanges();
            return new Response
            {
                Status = "Delete",
                Message = "Rejected"
            };
        }


        [Route("interviewdate")]
        [HttpPost]

        public object interviewdate(Loan hl)
        {
            try
            {
                var obj = DB.Loans.Where(x => x.LoanAccountNo == hl.LoanAccountNo).ToList().FirstOrDefault();

                if (obj.LoanAccountNo > 0)

                {
                    obj.LoanId = hl.LoanId;
                   
                    obj.Occupation = hl.Occupation;
                    obj.AnnualIncome = hl.AnnualIncome;
                    
                    obj.LoanAmount = hl.LoanAmount;
                    obj.Duration = hl.Duration;
                    obj.AccountNo = hl.AccountNo;
                    obj.EMI = hl.EMI;
                    obj.InterviewDate = hl.InterviewDate;
                    obj.Status = hl.Status;
                    DB.SaveChanges();

                    return new Response
                    {
                        Status = "Updated",
                        Message = "Updated Successfully"
                    };
                }
            }

            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            return new Response
            {
                Status = "Error",
                Message = "Invalid Data."
            };
        }

        [Route("HomeLoanDetailsbyID")]
        [HttpGet]
        public object HomeLoanById(int id)
        {
            var obj = DB.Loans.Where(x => x.LoanAccountNo == id).ToList().FirstOrDefault();
            return obj;
        }



       
        [Route("FinalVerification")]
        [HttpPost]

        public object FinalVerification(Loan hl)
        {
            try
            {
                var obj = DB.Loans.Where(x => x.LoanAccountNo == hl.LoanAccountNo).ToList().FirstOrDefault();

                if (obj.LoanAccountNo > 0)

                {
                    obj.LoanId = hl.LoanId;
                    obj.InterviewDate = hl.InterviewDate;
                    obj.Status = hl.Status;
                    obj.FinalStatus = hl.FinalStatus;
                    DB.SaveChanges();

                    return new Response
                    {
                        Status = "Updated",
                        Message = "Updated Successfully"
                    };
                }
            }

            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            return new Response
            {
                Status = "Error",
                Message = "Invalid Data."
            };
        }


        [Route("clientstatus")]
        [HttpGet]
        public object Statusdetails()
        {


           var obj = DB.Loans.Where(x => x.Status == "Accepted  ").ToList();

            return obj;
        }






    }




}