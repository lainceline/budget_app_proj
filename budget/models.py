from sqlalchemy import create_engine, Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

engine = create_engine('mysql://your_mysql_user:your_mysql_password@localhost/budget_db')
Base = declarative_base()

class Income(Base):
    __tablename__ = 'income'
    id = Column(Integer, primary_key=True)
    amount = Column(Float, nullable=False)
    description = Column(String(200), nullable=False)

class Expense(Base):
    __tablename__ = 'expense'
    id = Column(Integer, primary_key=True)
    amount = Column(Float, nullable=False)
    description = Column(String(200), nullable=False)

Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
session = Session()
