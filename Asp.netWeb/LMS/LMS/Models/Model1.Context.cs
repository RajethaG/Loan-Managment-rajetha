﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace LMS.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class LMSEntities4 : DbContext
    {
        public LMSEntities4()
            : base("name=LMSEntities4")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<ClientManager> ClientManagers { get; set; }
        public virtual DbSet<Loan> Loans { get; set; }
        public virtual DbSet<LoanProgram> LoanPrograms { get; set; }
        public virtual DbSet<PayLoan> PayLoans { get; set; }
        public virtual DbSet<User> Users { get; set; }
    }
}
